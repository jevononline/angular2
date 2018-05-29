import { find } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/forkJoin';

import { Component, OnInit, OnDestroy, Input, Output, ViewChild, EventEmitter, forwardRef, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TreeComponent, TreeNode, IActionMapping, TREE_ACTIONS, KEYS } from 'angular-tree-component';

import { AuthService } from '../../../../../core/auth/auth.service';
import { TreeviewService } from '../../../../../core/treeview/treeview.service';
import { SuperTreeviewComponent, ConfirmDialogComponent, ImportDialogComponent } from '../../../../../shared/';

import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

import { DepartmentFormComponent } from '../department-form/department-form.component';
import { DepartmentLeaderFormComponent } from '../department-leader-form/department-leader-form.component';

@Component({
  selector: 'app-department-treeview',
  templateUrl: './department-treeview.component.html',
  styleUrls: ['./department-treeview.component.scss']
})
export class DepartmentTreeviewComponent extends SuperTreeviewComponent implements OnInit, OnDestroy {


  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    @Optional() treeviewService: TreeviewService,
    private departmentsService: DepartmentsService
  ) {
    super(treeviewService);
  }


  getData() {
    function appendFieldToTrees(entities: Department[], parent: Department, counts: { id: number, staffCount: number }[], ) {
      entities.forEach(entity => {
        let item = find(counts, { id: entity.id });
        if (item) {
          entity.staffCount = item.staffCount;
        } else {
          entity.staffCount = 0;
        }
        if (entity.children && entity.children.length > 0) {
          appendFieldToTrees(entity.children, entity, counts, );
        }
      });
    }
    return new Promise<void>((resolve) => {
      Observable.forkJoin(this.departmentsService.getTree(), this.departmentsService.getStatistics()).subscribe((data) => {
        let [trees, counts] = data;
        appendFieldToTrees(trees, null, counts);
        this.nodes = trees;

        resolve();
      });
    });

  }


  onMoveNode(event) {
    this.departmentsService.moveNode(event.node, event.to).subscribe(data => {
      this.moveNode.emit(event);
    }, error => {

    });
  }

  openFormDialog({ action, node }) {
    let dialogRef = this.dialog.open(DepartmentFormComponent, {
      disableClose: true,
      data: { action, node },
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getData().then(() => {
          if (node) {
            this.activate.emit({ data: node });
          }
        });
      }
    });
  }

  openImportDialog() {
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '部门模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+mDqOmXqOaooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.departmentsService.import(result).subscribe(() => {
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

  openDeletionDialog(node) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: 'delete', content: node.name }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.departmentsService.delete(node.id).subscribe((data) => {
          this.getData();
          this.snackBar.open(`“${node.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;

          if (status === 423) {
            let msg = '操作失败';
            let { code } = errorResponse.error;
            if (code == 901) {
              msg = `操作失败，不能删除有子部门的部门！`;
            } else if (code == 902) {
              msg = `操作失败，不能删除有岗位的部门！`
            } else if (code === 903) {
              msg = `操作失败，该部门是某些标准的归口部门！`
            } else if (code === 904) {
              msg = `操作失败，不能删除正在参与流程中的部门！`
            }
            this.snackBar.open(msg, null, {
              duration: 3000,
              extraClasses: ['warn']
            });
          }
        });
      }
    });
  }

  openLeaderDialog(node) {

    this.departmentsService.getLeader(node.id).subscribe(data => {
      let dialogRef = this.dialog.open(DepartmentLeaderFormComponent, {
        data: data
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {

        }
      });
    });

  }

}

