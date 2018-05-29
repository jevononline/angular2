import { cloneDeep } from 'lodash';
import { Component, ViewChild, OnInit, Input, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Task } from '../../tasks/task';
import { TasksService } from '../../tasks/tasks.service';

import { StandardPickerComponent } from '../../../standard-management/standards/standard-picker/standard-picker.component';
import { StandardRevision } from '../standard-revision';


@Component({
  selector: 'app-standard-revision-manager',
  templateUrl: './standard-revision-manager.component.html',
  styleUrls: ['./standard-revision-manager.component.scss']
})
export class StandardRevisionManagerComponent implements OnInit {

  model: StandardRevision = new StandardRevision();

  @Input()
  mode: 'management' | 'view' = 'management';

  @Input()
  flag: number = 0;

  @Input()
  task: Task;

  @ViewChild('form')
  form: NgForm;

  isReady = false;
  submitting = false;
  constructor(private dialog: MatDialog, private tasksService: TasksService) {

  }

  ngOnInit() {
    this.model.resourceId = this.task.variables.find(item => item.name === 'resourceId').value;
    this.tasksService.getResoucre<StandardRevision>(this.model.resourceId).subscribe(data => {
      Object.assign(this.model, data.data);
      this.isReady = true;
    });
  }

  openReferenceStandardDialog() {
    this.dialog.open(StandardPickerComponent, { data: this.model.referenceStandardIds, width: '1000px' })
      .afterClosed().subscribe(result => {
        if (result) {
          this.model.referenceStandardIds = result;
        }
      });
  }

  onRemoveReferenceStandard(event) {
    this.model.referenceStandardIds = event;
  }

}