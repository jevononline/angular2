
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { SuperTreeSelectComponent } from '../../../../shared/';

import { StandardSystem } from '../standard-system';
import { StandardSystemService } from '../standard-system.service';

@Component({
  selector: 'app-standard-system-select',
  templateUrl: './standard-system-select.component.html',
  styleUrls: ['./standard-system-select.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StandardSystemSelectComponent), multi: true }
  ]
})
export class StandardSystemSelectComponent extends SuperTreeSelectComponent {

  @Input()
  ofSpecialStandardCommittee: boolean = false;

  constructor(private standardSystemService: StandardSystemService) {
    super();
    this.isSelectable = (node) => {
      // 标准体系select 根目录不可选中
      return !!node.realParent;
    };
  }

  getDisplayText(o: any) {
    let text = '';
    if (this.multiple) {
      text = o.map(item => `${item.structureNo} ${item.name}`).join();
    } else {
      text = `${o.structureNo} ${o.name}`;
    }
    return text;
  }

  getData() {

    return new Promise<void>((resolve) => {
      this.standardSystemService.getTree(this.root, this.ofSpecialStandardCommittee).subscribe((data) => {
        this.nodes = data;
        resolve();
      });
    });
  }


}
