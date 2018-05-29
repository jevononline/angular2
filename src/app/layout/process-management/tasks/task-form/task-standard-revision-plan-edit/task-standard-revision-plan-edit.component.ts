
import { findInex, values } from 'lodash';
import * as moment from 'moment';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { MatSnackBar } from '@angular/material';
import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { Task } from '../../task';
import { TasksService } from '../../tasks.service';
import { TaskFormComponent } from '../task-form.component';

import { StandardRevisionPlanManagerComponent } from '../../../standard-revision-plans/standard-revision-plan-manager/standard-revision-plan-manager.component';
import { StandardRevisionsService } from '../../../standard-revisions/standard-revisions.service';

@Component({
  selector: 'app-task-standard-revision-plan-edit',
  templateUrl: './task-standard-revision-plan-edit.component.html',
  styleUrls: ['./task-standard-revision-plan-edit.component.scss']
})
export class TaskStandardRevisionPlanEditComponent implements OnInit {

  @ViewChild('stadnardRevisionPlanManager')
  stadnardRevisionPlanManager: StandardRevisionPlanManagerComponent;

  @Input()
  task: Task;

  displayOpinions = false;
  StandardRevisionTypes: { [key: string]: IdNameValuePair };
  submitting: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private metadataService: MetadataService,
    private tasksService: TasksService,
    private standardRevisionsService: StandardRevisionsService,
    private parent: TaskFormComponent
  ) {
    this.StandardRevisionTypes = this.metadataService.get('StandardRevisionTypes');
  }

  ngOnInit() {
    let resultVariable = this.task.variables.find(item => item.name === 'result');
    if (resultVariable) {
      if (resultVariable.value == 0) {
        this.displayOpinions = true;
      }
    }
  }

  goOn() {
    this.submitting = true;

    let standardRevisions =
      this.standardRevisionsService.checkAvailability(this.task.processInstanceId,
        []
          .concat(
          this.stadnardRevisionPlanManager.database.createdItems,
          this.stadnardRevisionPlanManager.database.updatedItems,
          this.stadnardRevisionPlanManager.database.deletedItmes
          )
          .filter(item => item.revisionType === this.StandardRevisionTypes.Revise.value || item.revisionType === this.StandardRevisionTypes.Obsolete.value)
          .map(item => item.standard.standardNo)
      ).subscribe(() => {
        this.parent.goOn({
          standardRevisions: {
            createdItems: this.stadnardRevisionPlanManager.database.createdItems.map(item => this.standardRevisionsService.extract(item)),
            updatedItems: this.stadnardRevisionPlanManager.database.updatedItems.map(item => this.standardRevisionsService.extract(item)),
            deletedItems: this.stadnardRevisionPlanManager.database.deletedItmes.map(item => this.standardRevisionsService.extract(item))
          }
        });
      }, (errorResponse: HttpErrorResponse) => {
        this.submitting = false;
        let { status } = errorResponse;
        if (status === 423) {
          let { code, errorData } = errorResponse.error;
          if (code === 901) {
            this.snackBar.open(`操作失败，标准：${errorData}正在其他流程制修订中！`, null, { duration: 3000, extraClasses: ['warn'] });
          } else {
            //  
          }
        } else {
          this.snackBar.open(`系统异常，请稍后重试！`, null, { duration: 3000, extraClasses: ['warn'] });
        }
      });

  }

}