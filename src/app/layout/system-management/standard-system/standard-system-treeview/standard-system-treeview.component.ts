import { find } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Component, Input, OnInit, OnChanges, SimpleChanges, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TreeComponent, TreeNode, IActionMapping, TREE_ACTIONS, KEYS } from 'angular-tree-component';

import { AuthService } from '../../../../core/auth/auth.service';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { SuperTreeviewComponent, ConfirmDialogComponent, ImportDialogComponent } from '../../../../shared/';
import { StandardSystem } from '../standard-system';
import { StandardSystemService } from '../standard-system.service';

import { StandardSystemFormComponent } from '../standard-system-form/standard-system-form.component';

@Component({
  selector: 'app-standard-system-treeview',
  templateUrl: './standard-system-treeview.component.html',
  styleUrls: ['./standard-system-treeview.component.scss']
})
export class StandardSystemTreeviewComponent extends SuperTreeviewComponent implements OnInit, OnChanges {

  @Input()
  view = 0;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    @Optional() treeviewService: TreeviewService,
    private standardSystemService: StandardSystemService
  ) {
    super(treeviewService)
  }

  ngOnInit() {
    super.ngOnInit();

    // this.options.allowDrop = (element, { parent, index }) => {
    //   return parent.data.level > 1 || element.data.level === 2;
    // };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.view) {
      if (!changes.view.firstChange) {
        this.getData();
      }
    }
  }

  getData() {
    function appendFieldToTrees(entities: StandardSystem[], parent: StandardSystem, counts: { id: number, standardCount: number }[], ) {
      entities.forEach(entity => {
        let item = find(counts, { id: entity.id });
        if (item) {
          entity.standardCount = item.standardCount;
        } else {
          entity.standardCount = 0;
        }
        if (entity.children && entity.children.length > 0) {
          appendFieldToTrees(entity.children, entity, counts, );
        }
      });
    }
    return new Promise<void>((resolve) => {
      Observable.forkJoin(this.standardSystemService.getTree(), this.standardSystemService.getStatistics(this.view)).subscribe((data) => {
        let [trees, counts] = data;
        appendFieldToTrees(trees, null, counts);
        this.nodes = trees;

        resolve();
      });
    });

  }

  onMoveNode(event) {
    this.standardSystemService.moveNode(event.node, event.to).subscribe(data => {
      this.moveNode.emit(event);
    }, error => {

    });
  }

  gotoStandards(node) {
    if (this.treeviewService) {
      this.treeviewService.activated = node;
    }
    this.router.navigate(['/standard-management/standards']);
  }

  openFormDialog({ action, node }) {
    let dialogRef = this.dialog.open(StandardSystemFormComponent, {
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
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '标准体系模板', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+agh+WHhuS9k+ezu+aooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.standardSystemService.import(result).subscribe(() => {
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
        this.standardSystemService.delete(node.id).subscribe((data) => {
          this.getData();
          this.snackBar.open(`“${node.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;

          if (status === 423) {
            let msg = '操作失败';
            let { code } = errorResponse.error;
            if (code === 901) {
              msg = `操作失败，不能删除有子体系的体系！`;
            } else if (code === 902) {
              msg = `操作失败，不能删除有标准的体系！`;
            } else if (code === 903) {
              msg = `操作失败，不能删除正在流程中使用的体系！`;
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

}

