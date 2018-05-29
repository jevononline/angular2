import { find } from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { AuthService } from '../../../../core/auth/auth.service';
import { SuperTreeviewComponent } from '../../../../shared/';

import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { Department } from '../../../management/org/departments/department';
import { StandardNetworkService } from '../standard-network.service';

import { StandardNetworkLeaderFormComponent } from '../standard-network-leader-form/standard-network-leader-form.component';

@Component({
  selector: 'app-standard-network-treeview',
  templateUrl: './standard-network-treeview.component.html',
  styleUrls: ['./standard-network-treeview.component.scss']
})
export class StandardNetworkTreeviewComponent extends SuperTreeviewComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    public authService: AuthService,
    @Optional() treeviewService: TreeviewService,
    private networkService: StandardNetworkService
  ) {
    super(treeviewService);
  }


  getData() {
    function appendFieldToTrees(entities: Department[], parent: Department, counts: { id: number, staffCount: number }[], ) {
      entities.forEach(entity => {
        let item = find(counts, { id: entity.id });
        if (item) {
          entity.staffCount = item.staffCount;
        }
        if (entity.children && entity.children.length > 0) {
          appendFieldToTrees(entity.children, entity, counts, );
        }
      });
    }
    return new Promise<void>((resolve) => {
      Observable.forkJoin(this.networkService.get(), this.networkService.getStatistics()).subscribe((data) => {
        let [trees, counts] = data;
        appendFieldToTrees(trees, null, counts);
        this.nodes = trees;

        resolve();
      });
    });

  }

  openLeaderDialog(node) {

    this.networkService.getLeader(node.id).subscribe(data => {
      let dialogRef = this.dialog.open(StandardNetworkLeaderFormComponent, {
        data
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {

        }
      });
    });

  }

}

