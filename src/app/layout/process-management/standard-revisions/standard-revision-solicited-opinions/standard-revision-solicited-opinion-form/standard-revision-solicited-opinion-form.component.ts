
import { cloneDeep } from 'lodash';
import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthService } from '../../../../../core/auth/auth.service';
import { MetadataService } from '../../../../../core/metadata/metadata.service';
import { StandardRevisionSolicitedOpinion } from '../standard-revision-solicited-opinion';



@Component({
  selector: 'app-standard-revision-solicited-opinion-form',
  templateUrl: './standard-revision-solicited-opinion-form.component.html',
  styleUrls: ['./standard-revision-solicited-opinion-form.component.scss']
})
export class StandardRevisionSolicitedOpinionFormComponent implements OnInit {

  createdBy: string;
  model: StandardRevisionSolicitedOpinion = new StandardRevisionSolicitedOpinion();
  level: number = 1;

  submitting = false;
  constructor(
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: { opinion: StandardRevisionSolicitedOpinion, level: number },
    private dialog: MatDialogRef<StandardRevisionSolicitedOpinionFormComponent>
  ) {

  }

  ngOnInit() {

    this.model = cloneDeep(this.data.opinion);
    this.level = this.data.level;

    if (!this.model.createdBy) {
      // 也即新建
      this.model.createdBy = this.authService.getCurrentUser();
    }
  }

  hasLevel(value) {
    return (value & this.level) === value;
  }

  onSubmit() {
    this.dialog.close(this.model);
  }

}
