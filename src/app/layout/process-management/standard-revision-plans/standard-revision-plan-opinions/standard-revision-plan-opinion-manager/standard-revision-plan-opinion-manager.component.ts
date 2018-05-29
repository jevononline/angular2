
import { findInex, values } from 'lodash';

import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { ResourceTableDatabase, ResouceTableDataSource } from '../../../resources/resource';

import { Task } from '../../../tasks/task';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionPlanOpinion } from '../standard-revision-plan-opinion';
import { StandardRevisionPlanOpinionFormComponent } from '../standard-revision-plan-opinion-form/standard-revision-plan-opinion-form.component';

@Component({
  selector: 'app-standard-revision-plan-opinion-manager',
  templateUrl: './standard-revision-plan-opinion-manager.component.html',
  styleUrls: ['./standard-revision-plan-opinion-manager.component.scss']
})
export class StandardRevisionPlanOpinionManagerComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  level: number = 1; //1 提意见阶段 2 处理意见阶段

  @Input()
  management: number = 0; //0 无 1 可以提意见 2 可以处理意见 

  data: StandardRevisionPlanOpinion[];

  StandardRevisionTypes: { [key: string]: IdNameValuePair };
  standardRevisionTypeList: IdNameValuePair[];

  displayedColumns = ['resourceId', 'content', 'reason', 'createdBy', 'createdAt'];
  dataSource: ResouceTableDataSource<StandardRevisionPlanOpinion> | null;
  database = new ResourceTableDatabase<StandardRevisionPlanOpinion>();

  constructor(
    private dialog: MatDialog,
    private metadataService: MetadataService,
    private tasksService: TasksService
  ) {

  }

  ngOnInit() {

    if ((this.level & 2) === 2) {
      this.displayedColumns = this.displayedColumns.concat(['adopted', 'adoptedReason']);
    }

    if (this.management > 0) {
      this.displayedColumns = this.displayedColumns.concat(['actions']);
    }

    this.dataSource = new ResouceTableDataSource<StandardRevisionPlanOpinion>(this.database);
    this.tasksService.getResoures<StandardRevisionPlanOpinion>(this.task, this.metadataService.get('ResourceType').standardRevisionPlanOpinion).subscribe((data) => {
      this.database.append(data);
    });
  }

  openOpinionFormDialog({ action, level, index, node }) {

    let opinion = node || new StandardRevisionPlanOpinion();

    let dialogRef = this.dialog.open(StandardRevisionPlanOpinionFormComponent, { data: { opinion, level }, width: '500px' });


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

  hasManagement(value) {
    return (value & this.management) === value;
  }

  hasLevel(value) {
    return (value & this.level) === value;
  }

  delete(index, node) {
    this.database.delete(index, node);
  }

}