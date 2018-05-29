import { values } from 'lodash';
import { Component, OnInit, OnChanges, SimpleChanges, EventEmitter, ViewChild, ElementRef, Input, Output, Inject } from '@angular/core';
import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { HttpErrorResponse } from '@angular/common/http';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';

import { APP_CONFIG, AppConfig } from '../../../../core/app-config';
import { AuthService } from '../../../../core/auth/auth.service';
import { MetadataService } from '../../../../core/metadata/metadata.service';
import { ConfirmDialogComponent, TableDataSource } from '../../../../shared/';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';
import { StandardsService } from '../standards.service';
import { StandardLogsService } from '../../../standard-logs/standard-logs.service';
import { Standard } from '../standard';
import { StandardAdoption } from '../standard-adoptions/standard-adoption';
import { StandardAdvancedFilterSerialized } from '../standard-advanced-filter/standard-advanced-filter';

@Component({
  selector: 'app-standard-table',
  templateUrl: './standard-table.component.html',
  styleUrls: ['./standard-table.component.scss']
})
export class StandardTableComponent implements OnInit, OnChanges {

  selection: SelectionModel<number>;

  displayedColumns = [];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @Input()
  filter: Subject<string>;
  keyword: string;

  @Input()
  standardSystem: StandardSystem;

  @Input()
  view: number;

  @Input()
  advancedFilter: StandardAdvancedFilterSerialized;

  @Input()
  selected: number[] = [];

  @Input()
  mode: 'management' | 'view' | 'selection' = 'management';

  @Input()
  ngDisabled: boolean;

  @Output()
  selectionChange = new EventEmitter();

  standardAdoptionLevels: IdNameValuePair[];

  dataSource: TableDataSource<Standard>;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private metadataService: MetadataService,
    private standardsService: StandardsService,
    private standardLogsService: StandardLogsService,
  ) {
    this.standardAdoptionLevels = values(this.metadataService.get('StandardAdoptionLevels'));
  }

  ngOnInit() {
    if (this.mode === 'selection') {
      this.displayedColumns = ['selection', 'id', 'structureNo', 'standardNo', 'name', 'department', 'publishDate', 'executeDate'];
      this.selection = new SelectionModel<number>(true, this.selected);
      this.selection.onChange.subscribe(() => {
        setTimeout(() => {
          this.selectionChange.emit(this.selection.selected);
        });
      });
      this.paginator.page.subscribe(() => {
        this.selection.clear();
      });
    } else if (this.mode === 'management') {
      this.displayedColumns = ['id', 'structureNo', 'standardNo', 'name', 'department', 'publishDate', 'executeDate', 'actions'];
    }

    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.standardsService.get(
          this.standardSystem.id,
          this.view,
          { ...tableQuery, keyword: this.keyword, ...this.advancedFilter });
      }
    }, this.paginator, this.sort);

    if (this.filter) {
      this.filter.subscribe((value) => {
        this.keyword = value;
        this.dataSource.refresh();
      });
    }


  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      (changes.standardSystem && !changes.standardSystem.firstChange)
      ||
      (changes.view && !changes.view.firstChange)
      ||
      (changes.advancedFilter && !changes.advancedFilter.firstChange)
    ) {
      this.dataSource.refresh();
    }
  }

  getAdoptionString(items: StandardAdoption[]) {
    return items.map(item => (`${item.standardNo} ${this.standardAdoptionLevels.find(z => z.value === item.standardAdoptionLevel).name}`)).join('\n');
  }

  getReplacingStandardsString(items: string[]) {
    return items.map(item => item).join('\n');
  }


  isAllSelected(): boolean {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    return this.selection.selected.length == this.paginator.pageSize;

  }

  allToggle() {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    }
  }

  isEditable(row) {
    return row.categoryValue === this.metadataService.get('StandardCategories').Enterprise.value;
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.standardsService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;
          let message = '操作失败';
          if (status === 409) {
            let { code } = errorResponse.error;
            if (code === 901) {
              message = `操作失败，标准处在流程中，不可编辑或删除`;
            }
          }
          this.snackBar.open(message, null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }

  onDownloadComplete(id: number) {
    this.standardLogsService.log(id, this.metadataService.get('StandardLogEvents').Download.value).subscribe(() => {

    });
  }

}

