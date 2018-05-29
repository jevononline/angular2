import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AuthService } from '../../../core/auth/auth.service';
import { ImportDialogComponent } from '../../../shared/';
import { TreeviewService } from '../../../core/treeview/treeview.service';
import { StandardTableComponent } from './standard-table/standard-table.component';
import { StandardSystem } from '../../system-management/standard-system/standard-system';
import { StandardsService } from './standards.service';

@Component({
  selector: 'app-standards',
  templateUrl: './standards.component.html',
  styleUrls: ['./standards.component.scss']
})
export class StandardsComponent implements OnInit {

  isReady = false;

  standardSystem: StandardSystem;
  view: number;
  chargedDepartments: number[];

  advancedFilter: any;

  @ViewChild('keyword')
  keyword: ElementRef;

  @ViewChild('dataTable')
  dataTable: StandardTableComponent;

  filter = new Subject<string>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    private treeviewService: TreeviewService,
    private standardsService: StandardsService,
  ) {
    // this.view = +this.route.snapshot.params.view;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.view = +params.view;
    });

    if (this.treeviewService) {
      this.standardSystem = this.treeviewService.activated;
    }

    Observable.fromEvent(this.keyword.nativeElement, 'keyup')
      .filter((e: KeyboardEvent) => e.keyCode == 13)
      .subscribe(() => {
        this.filter.next(this.keyword.nativeElement.value);
      });

    this.chargedDepartments = this.authService.currentUser.charge;

  }

  onActivate(event) {
    this.isReady = true;
    this.standardSystem = event.data;
    if (this.treeviewService) {
      this.treeviewService.activated = event.data;
    }
  }

  onSetAdvancedFilter(event) {
    this.advancedFilter = event;
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '标准明细模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+agh+WHhuaYjue7huaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.standardsService.import(result).subscribe(() => {
          this.dataTable.dataSource.refresh();
          this.snackBar.open('导入成功', null, { duration: 3000 });
          if (this.treeviewService) {
            this.treeviewService.refresh();
          }
        }, () => {
          this.snackBar.open('导入失败', null, { duration: 3000, extraClasses: ['warn'] });
        });
      }
    });
  }



}
