


import { findInex, values } from 'lodash';

import { Component, OnInit, Input } from '@angular/core';

import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { ResourceTableDatabase, ResouceTableDataSource } from '../../../resources/resource';

import { Task } from '../../../tasks/task';
import { TasksService } from '../../../tasks/tasks.service';

import { StandardRevisionOpinion } from '../standard-revision-opinion';

@Component({
  selector: 'app-standard-revision-opinion-table',
  templateUrl: './standard-revision-opinion-table.component.html',
  styleUrls: ['./standard-revision-opinion-table.component.scss']
})
export class StandardRevisionOpinionTableComponent implements OnInit {

  @Input()
  task: Task;

  data: StandardRevisionOpinion[];

  displayedColumns = ['resourceId', 'content', 'createdBy', 'createdAt'];
  dataSource: ResouceTableDataSource<StandardRevisionOpinion> | null;
  database = new ResourceTableDatabase<StandardRevisionOpinion>();

  constructor(private metadataService: MetadataService, private tasksService: TasksService) {

  }

  ngOnInit() {

    this.dataSource = new ResouceTableDataSource<StandardRevisionOpinion>(this.database);
    this.tasksService.getResoures<StandardRevisionOpinion>(this.task, this.metadataService.get('ResourceType').standardRevisionOpinion).subscribe((data) => {
      this.database.append(data);
    });
  }



}