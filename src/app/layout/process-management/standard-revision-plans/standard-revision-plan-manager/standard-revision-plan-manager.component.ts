import { findInex, values } from 'lodash';
import * as moment from 'moment';
import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import { ResourceTableDatabase, ResouceTableDataSource } from '../../resources/resource';

import { Task } from '../../tasks/task';
import { TasksService } from '../../tasks/tasks.service';

import { MetadataService } from '../../../../core/metadata/metadata.service';
import { Standard } from '../../../standard-management/standards/standard';
import { StandardRevision } from '../../standard-revisions/standard-revision';
import { StandardRevisionFormComponent } from '../../standard-revisions/standard-revision-form/standard-revision-form.component';

@Component({
  selector: 'app-standard-revision-plan-manager',
  templateUrl: './standard-revision-plan-manager.component.html',
  styleUrls: ['./standard-revision-plan-manager.component.scss']
})
export class StandardRevisionPlanManagerComponent implements OnInit {

  @Input()
  task: Task;
  @Input()
  mode: 'management' | 'view' = 'management';

  data: StandardRevision[];

  StandardRevisionTypes: { [key: string]: IdNameValuePair };
  standardRevisionTypeList: IdNameValuePair[];

  displayedColumns = ['resourceId', 'revisionType', 'standardNo', 'name', 'standardSystem', 'department', 'drafter', 'finishTime', 'actions'];
  dataSource: ResouceTableDataSource<StandardRevision> | null;
  database = new ResourceTableDatabase<StandardRevision>();

  constructor(
    private dialog: MatDialog,
    private metadataService: MetadataService,
    private tasksService: TasksService
  ) {
    this.StandardRevisionTypes = this.metadataService.get('StandardRevisionTypes');
    this.standardRevisionTypeList = values(this.metadataService.get('StandardRevisionTypes'));
  }

  ngOnInit() {
    this.dataSource = new ResouceTableDataSource<StandardRevision>(this.database);
    this.tasksService.getResoures<StandardRevision>(this.task, this.metadataService.get('ResourceType').standardRevision)
      .map(data => {
        data.forEach(item => {
          item.finishTime = moment(item.finishTime).toDate();
        });

        return data;
      })
      .subscribe((data) => {
        this.database.append(data);
      });
  }

  openStandardRevisionFormDialog({ action, revisionType, index, node }) {

    let data = node || new StandardRevision();

    data.revisionType = revisionType;

    let dialogRef = this.dialog.open(StandardRevisionFormComponent, { data, width: '500px' });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'create') {
          this.database.create(result);
        } else if (action === 'update') {
          this.database.update(index, result);
        }
      }
    });
  }

  delete(index, node) {
    this.database.delete(index, node);
  }

}