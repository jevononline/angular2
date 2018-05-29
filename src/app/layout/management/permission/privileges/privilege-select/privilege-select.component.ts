import { Component, OnInit, ViewChild, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Privilege } from '../privilege';
import { TreeComponent } from 'angular-tree-component';
import { PrivilegesService } from '../privileges.service';

@Component({
  selector: 'app-privilege-select',
  templateUrl: './privilege-select.component.html',
  styleUrls: ['./privilege-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PrivilegeSelectComponent), multi: true }]
})
export class PrivilegeSelectComponent implements OnInit, ControlValueAccessor {
  nodes = [];

  @ViewChild('tree')
  tree: TreeComponent;

  myModel: Privilege[];
  checked: Privilege[];

  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  constructor(private privilegesService: PrivilegesService) { }

  ngOnInit() {
    this.privilegesService.get().subscribe((data) => {
      this.nodes = data;

      setTimeout(() => {
        this.writeValue(this.myModel);
        // this.tree.treeModel.expandAll();
      }, 0);
    });
  }

  writeValue(value: Privilege[]) {
    if (value) {
      value.forEach((item) => {
        let node = this.tree.treeModel.getNodeById(item.id);
        if (node) {
          this.check(node, true);
        }
      });
      this.myModel = value;
    }
  }

  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  change(node, checked) {
    this.check(node, checked);
    this.myModel = [];
    this.calcMyModel(this.tree.treeModel.nodes);
    this.onChangeCallback(this.myModel);
  }

  check(node, checked) {
    this.updateChildNodeCheckbox(node, checked);
    this.updateParentNodeCheckbox(node.realParent);
  }

  calcMyModel(nodes) {
    nodes.forEach(item => {
      if (item.checked && !item.indeterminate) {
        this.myModel.push(item);
      }
      if (item.children) {
        this.calcMyModel(item.children);
      }
    });
  }

  updateChildNodeCheckbox(node, checked) {
    node.data.checked = checked;
    if (node.children) {
      node.children.forEach((child) => this.updateChildNodeCheckbox(child, checked));
    }
  }

  updateParentNodeCheckbox(node) {
    if (!node) {
      return;
    }

    let allChildrenChecked = true;
    let noChildChecked = true;

    for (const child of node.children) {
      if (!child.data.checked || child.data.indeterminate) {
        allChildrenChecked = false;
      }
      if (child.data.checked) {
        noChildChecked = false;
      }
    }

    if (allChildrenChecked) {
      node.data.checked = true;
      node.data.indeterminate = false;
    } else if (noChildChecked) {
      node.data.checked = false;
      node.data.indeterminate = false;
    } else {
      node.data.checked = true;
      node.data.indeterminate = true;
    }
    this.updateParentNodeCheckbox(node.parent);
  }
}
