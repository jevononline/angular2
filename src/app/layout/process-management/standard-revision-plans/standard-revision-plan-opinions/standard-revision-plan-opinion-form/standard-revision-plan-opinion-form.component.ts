
import { cloneDeep } from 'lodash';
import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from '../../../../../core/auth/auth.service';
import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { StandardRevisionPlanOpinion } from '../standard-revision-plan-opinion';



@Component({
  selector: 'app-standard-revision-plan-opinion-form',
  templateUrl: './standard-revision-plan-opinion-form.component.html',
  styleUrls: ['./standard-revision-plan-opinion-form.component.scss']
})
export class StandardRevisionPlanOpinionFormComponent implements OnInit {

  createdBy: string;
  model: StandardRevisionPlanOpinion = new StandardRevisionPlanOpinion();
  level: number = 1;

  submitting = false;
  constructor(
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: { opinion: StandardRevisionPlanOpinion, level: number },
    private dialog: MatDialogRef<StandardRevisionPlanOpinionFormComponent>
  ) {

  }

  ngOnInit() {

    this.model = cloneDeep(this.data.opinion);
    this.level = this.data.level;

    if (!this.model.createdBy) {
      // 也即新建
      this.model.createdBy = this.authService.getCurrentUser();
    }
    if (!this.model.createdAt) {
      this.model.createdAt = new Date();
    }
  }

  hasLevel(value) {
    return (value & this.level) === value;
  }

  onSubmit() {
    this.dialog.close(this.model);
  }

}
