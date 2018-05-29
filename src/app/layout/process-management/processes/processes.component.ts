
import { values } from 'lodash';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/filter';


import { APP_CONFIG, AppConfig } from '../../../core/app-config';
import { AuthService } from '../../../core/auth/auth.service';
import { MetadataService } from '../../../core/metadata/metadata.service';
import { ConfirmDialogComponent, TableDataSource } from '../../../shared/';
import { ProcessFormComponent } from './process-form/process-form.component';
import { ProcessSettingsComponent } from './process-settings/process-settings.component';
import { ProcessesService } from './processes.service';
import { Process } from './process';


@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent implements OnInit {

  PlanTypes: { [key: string]: IdNameValuePair };
  planTypeList: IdNameValuePair[];


  displayedColumns = [];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('keyword')
  keyword: ElementRef;

  dataSource: TableDataSource<Process>;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(APP_CONFIG) public appConfig: AppConfig,
    public authService: AuthService,
    private metadataService: MetadataService,
    private processesService: ProcessesService
  ) {
    this.PlanTypes = this.metadataService.get('PlanType');
    this.planTypeList = [values(this.metadataService.get('PlanType'))[0]];
  }

  ngOnInit() {
    this.displayedColumns = ['id', 'name', 'type', 'createdBy', 'createdAt', 'actions'];

    this.dataSource = new TableDataSource({
      get: (tableQuery) => {
        return this.processesService.get({ ...tableQuery, keyword: this.keyword.nativeElement.value });
      }
    }, this.paginator, this.sort);

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.dataSource.refresh();
      });
  }

  openProcessSettingDialog(item) {
    let dialogRef = this.dialog.open(ProcessSettingsComponent, { data: item });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }


  viewProcessDetail (item) {
    if(item.type === this.PlanTypes.StandardRevisionPlan.value){
      this.gotoTaskDetail(item);
    }else{
      this.openProcessFormDialog({action:'read',type:item.value,node:item});
    }
  }

  openProcessFormDialog({ action, node, type }) {
    let dialogRef = this.dialog.open(ProcessFormComponent, { data: { action, node, type } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataSource.refresh();
      }
    });
  }

  openDeletionDialog(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: item.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.processesService.delete(item.id).subscribe(() => {
          this.dataSource.refresh();
          this.snackBar.open(`“${item.name}”已删除！`, null, {
            duration: 2000
          });
        });
      }
    });
  }

  gotoTaskDetail (item) {
    this.router.navigate(['/process-management/processes/detail', {
      processInstanceId: item.processInstanceId
    }])
  }
}

