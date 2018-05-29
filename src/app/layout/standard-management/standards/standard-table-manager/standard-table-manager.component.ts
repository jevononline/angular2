
import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


import { TableDataSource } from '../../../../shared/'

import { StandardsService } from '../standards.service';
import { Standard } from '../standard';

@Component({
  selector: 'app-standard-table-manager',
  templateUrl: './standard-table-manager.component.html',
  styleUrls: ['./standard-table-manager.component.scss']
})
export class StandardTableManagerComponent implements OnInit, OnChanges {


  displayedColumns = [];

  @Input()
  ids: number[];

  @Input()
  mode: 'management' | 'view' = 'management';

  @Output()
  remove = new EventEmitter();

  dataSource: TableDataSource<Standard>;

  constructor(private standardsService: StandardsService) {

  }

  ngOnInit() {
    this.displayedColumns = ['standardSystem', 'standardNo', 'name', 'department', 'drafter', 'actions'];

    this.dataSource = new TableDataSource({
      get: () => {
        if (Array.isArray(this.ids) && this.ids.length > 0) {
          return this.standardsService.getManyByIds(this.ids).map(data => {
            return { results: data, total: data.length };
          });
        } else {
          return Observable.of({ results: [], total: 0 });
        }
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ids && !changes.ids.firstChange) {
      this.dataSource.refresh();
    }
  }

  removeOne(item) {
    let i = this.ids.findIndex(z => z == item.id);
    if (i > -1) {
      let ids = this.ids.slice();
      ids.splice(i, 1);
      this.remove.emit(ids);
    }
  }

}
