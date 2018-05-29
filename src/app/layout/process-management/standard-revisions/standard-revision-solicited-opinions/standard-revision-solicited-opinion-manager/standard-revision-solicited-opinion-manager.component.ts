
import { findInex, values } from 'lodash';

import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { ResourceTableDatabase, ResouceTableDataSource } from '../../../resources/resource';

import { Task } from '../../../tasks/task';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionSolicitedOpinion } from '../standard-revision-solicited-opinion';
import { StandardRevisionSolicitedOpinionFormComponent } from '../standard-revision-solicited-opinion-form/standard-revision-solicited-opinion-form.component';

@Component({
  selector: 'app-standard-revision-solicited-opinion-manager',
  templateUrl: './standard-revision-solicited-opinion-manager.component.html',
  styleUrls: ['./standard-revision-solicited-opinion-manager.component.scss']
})
export class StandardRevisionSolicitedOpinionManagerComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  level: number = 1; //1 提意见阶段 2 处理意见阶段

  @Input()
  management: number = 0; //0 无 1 可以提意见 2 可以处理意见 

  data: StandardRevisionSolicitedOpinion[];

  StandardRevisionTypes: { [key: string]: IdNameValuePair };
  standardRevisionTypeList: IdNameValuePair[];

  displayedColumns = ['resourceId', 'createdBy', 'pointer', 'src', 'content', 'remark', 'createdAt'];
  dataSource: ResouceTableDataSource<StandardRevisionSolicitedOpinion> | null;
  database = new ResourceTableDatabase<StandardRevisionSolicitedOpinion>();

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

    this.dataSource = new ResouceTableDataSource<StandardRevisionSolicitedOpinion>(this.database);
    this.tasksService.getResoures<StandardRevisionSolicitedOpinion>(this.task, this.metadataService.get('ResourceType').standardRevisionSolicitedOpinion).subscribe((data) => {
      this.database.append(data);
    });
  }

  openOpinionFormDialog({ action, level, index, node }) {

    let opinion = node || new StandardRevisionSolicitedOpinion();

    let dialogRef = this.dialog.open(StandardRevisionSolicitedOpinionFormComponent, { data: { opinion, level }, width: '500px' });


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