import { OnInit, OnChanges, SimpleChanges, Input, Output, AfterViewInit, ViewChild, EventEmitter } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material';
import { TreeComponent, TreeNode, IActionMapping, TREE_ACTIONS, KEYS } from 'angular-tree-component';

import { SuperSelectComponent } from '../super-select/super-select.component';

export class SuperTreeSelectComponent implements AfterViewInit {

  disabled = false;
  onChangeCallback = (z: any) => { };
  onTouchedCallback = () => { };

  @Input()
  placeholder: string;

  @Input()
  floatPlaceholder: string;

  @Input()
  required: boolean;

  @Input()
  multiple = false;

  @Output()
  change = new EventEmitter();

  @Output()
  close = new EventEmitter();

  @Input()
  isDisabledOption = (z: any) => false;

  @Input()
  root = 0;

  @ViewChild(MatMenu)
  menu: MatMenu;

  @ViewChild(MatMenuTrigger)
  menuTrigger: MatMenuTrigger;

  displayText = '';

  constructor() {

  }

  writeValue(value: any) {
    this.activated = value;
    this.setActivate();
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

  clear() {
    if (this.multiple) {
      this.activated = [];
    } else {
      this.activated = undefined;
    }
    this.onChange();
  }

  getDisplayText(o: any) {
    let text = '';
    if (this.multiple) {
      text = o.map(item => item.name).join();
    } else {
      text = o.name;
    }
    return text;
  }

  makeDisplayText() {

    if (this.multiple) {
      let nodes = this.tree.treeModel.getActiveNodes().map(item => item.data);
      if (Array.isArray(nodes) && nodes.length > 0) {
        this.displayText = this.getDisplayText(nodes);
      } else {
        this.displayText = '';
      }
    } else {
      let node = this.tree.treeModel.getActiveNode();
      if (node) {
        this.displayText = this.getDisplayText(node.data);
      } else {
        this.displayText = '';
      }
    }

  }

  onActivate(event) {
    this.activate.emit(event.node);

    this.makeDisplayText();
    this.onToggle();


  }

  onDeactivate(event) {
    this.deactivate.emit(event.node);

    this.makeDisplayText();
    this.onToggle();

  }

  onToggle() {
    if (this.multiple) {
      this.activated = (this.tree.treeModel.getActiveNodes() || []).map(item => item.data);
    } else {
      this.activated = (this.tree.treeModel.getActiveNode() || { data: undefined }).data;
    }
    this.onChange();
  }


  options = {
    actionMapping: {
      mouse: {
        click: this.toggleSelection.bind(this),
        expanderClick: this.clickExpander.bind(this)
      },
      keys: {
        [KEYS.ENTER]: this.toggleSelection.bind(this),
        [KEYS.SPACE]: this.toggleSelection.bind(this)
      }
    }
    // animateExpand: true
  };

  @ViewChild('tree')
  tree: TreeComponent;

  nodes: any[] = [];

  @Output()
  toggle = new EventEmitter<TreeNode>();

  @Input()
  autoActivate = false;
  @Input()
  activated: any;
  @Output()
  activate = new EventEmitter<TreeNode>();
  @Output()
  deactivate = new EventEmitter<TreeNode>();

  @Input()
  isSelectable = (z) => true;

  initialized = false;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {

    if (this.initialized && changes.activated && !changes.activated.firstChange) {
      this.setActivate();
    }
  }

  ngAfterViewInit() {
    if (this.menuTrigger) {
      this.menuTrigger.onMenuOpen.subscribe(() => {
        this.__changed = false;
      });
      this.menuTrigger.onMenuClose.subscribe(() => {
        this.onClose();
      });
    }

  }

  getData() {
    return Promise.resolve();
  }

  __changed = false;
  onChange() {
    this.__changed = true;
    this.onChangeCallback(this.activated);
    this.change.emit();
  }

  onClose() {
    this.onTouchedCallback();
    this.close.emit({ value: this.activated, changed: this.__changed });
  }

  onInitialized() {
    this.getData().then(() => {
      this.initialized = true;
      setTimeout(() => {
        if (this.nodes.length > 0) {
          if (!this.activated) {
            // if (this.autoActivate) {
            //   this.tree.treeModel.getFirstRoot().setActiveAndVisible().expand();
            // }
          } else {
            this.setActivate();
          }
        }
      });
    });
  }

  setActivate() {
    if (this.multiple) {
      if (Array.isArray(this.activated)) {
        let ids = {};
        this.activated.forEach(item => {
          ids[item.id] = true;
        });
        this.tree.treeModel.activeNodeIds = ids;
        //   this.tree.treeModel.expandedNodeIds = ids;
        // this.activate.emit();
      } else {
        this.tree.treeModel.activeNodeIds = {};
      }
    } else {
      if (this.activated) {
        this.tree.treeModel.activeNodeIds = { [this.activated.id]: true };
        // this.activate.emit();
        //   this.tree.treeModel.getNodeById(this.activated.id).setActiveAndVisible();
      } else {
        this.tree.treeModel.activeNodeIds = {};
      }
    }
    this.makeDisplayText();
  }

  toggleSelection(tree, node, event) {

    if (this.isSelectable(node)) {
      if (this.multiple) {
        TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, event);
      } else {
        if (!tree.activeNodeIds[node.id]) {
          TREE_ACTIONS.TOGGLE_SELECTED(tree, node, event);
        }
      }
      this.toggle.emit(node);
    }
  }

  clickExpander(tree, node, event) {

    TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, event);
  }

}
