import { find } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Component, OnInit, Optional } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AuthService } from '../../../../core/auth/auth.service';
import { SuperTreeviewComponent, ConfirmDialogComponent, ImportDialogComponent } from '../../../../shared/';

import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { StandardCommittee } from '../standard-committee';
import { StandardCommitteeService } from '../standard-committee.service';

import { StandardCommitteeFormComponent } from '../standard-committee-form/standard-committee-form.component';
import { StandardCommitteeLeaderFormComponent } from '../standard-committee-leader-form/standard-committee-leader-form.component';

@Component({
  selector: 'app-standard-committee-treeview',
  templateUrl: './standard-committee-treeview.component.html',
  styleUrls: ['./standard-committee-treeview.component.scss']
})
export class StandardCommitteeTreeviewComponent extends SuperTreeviewComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    @Optional() treeviewService: TreeviewService,
    private standardCommitteeService: StandardCommitteeService
  ) {
    super(treeviewService);
  }

  getData() {
    function appendFieldToTrees(entities: StandardCommittee[], parent: StandardCommittee, counts: { id: number, staffCount: number }[], ) {
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
      Observable.forkJoin(this.standardCommitteeService.get(), this.standardCommitteeService.getStatistics()).subscribe((data) => {
        let [trees, counts] = data;
        appendFieldToTrees(trees, null, counts);
        this.nodes = trees;
        resolve();

      });
    });

  }

  onMoveNode(event) {
    this.standardCommitteeService.moveNode(event.node, event.to).subscribe(data => {
      this.moveNode.emit(event);
    }, error => {

    });
  }

  openFormDialog({ action, node }) {
    let dialogRef = this.dialog.open(StandardCommitteeFormComponent, {
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
    let dialogRef = this.dialog.open(ImportDialogComponent, { data: { filename: '标委会组织模板.xlsx', ticket: 'ZGF0YS1pbXBvcnQtdGVtcGxhdGVzL+agh+WnlOS8mue7hOe7h+aooeadvy54bHN4' } });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.standardCommitteeService.import(result).subscribe(() => {
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
        this.standardCommitteeService.delete(node.id).subscribe((data) => {
          this.getData();
          this.snackBar.open(`“${node.name}”已删除！`, null, {
            duration: 2000
          });
        }, (errorResponse: HttpErrorResponse) => {
          let { status } = errorResponse;

          if (status === 423) {
            let msg = null;
            let { code } = errorResponse.error;
            if (code == 901) {
              msg = `删除“${node.name}”失败，不能删除有子组织的组织！`;
            } else if (code == 902) {
              msg = `删除“${node.name}”失败，不能删除有人员的组织！`
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

    this.standardCommitteeService.getLeader(node.id).subscribe(data => {
      let dialogRef = this.dialog.open(StandardCommitteeLeaderFormComponent, {
        data: data
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {

        }
      });
    });

  }

}

