
import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { MatTable } from '@angular/material';

import { TableDataSource } from '../table';

@Component({
  selector: 'ux-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(MatTable)
  table: MatTable<any>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    setTimeout(() => {
      if (!this.table) {
        throw (new Error('require mat table'));
      }
    });
  }

  isLoading() {
    return (this.table!.dataSource as any).isLoading
  }

}
