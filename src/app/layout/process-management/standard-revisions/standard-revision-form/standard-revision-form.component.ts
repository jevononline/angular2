import { cloneDeep } from 'lodash';
import { Component, OnInit, Input, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { MetadataService } from '../../../../core/metadata/metadata.service';
import { StandardRevision } from '../standard-revision';

@Component({
  selector: 'app-standard-revision-form',
  templateUrl: './standard-revision-form.component.html',
  styleUrls: ['./standard-revision-form.component.scss']
})
export class StandardRevisionFormComponent implements OnInit {

  StandardRevisionTypes: { [key: string]: IdNameValuePair };

  model: StandardRevision = new StandardRevision();

  submitting = false;
  constructor(
    private metadataService: MetadataService,
    @Inject(MAT_DIALOG_DATA) public data: StandardRevision,
    private dialog: MatDialogRef<StandardRevisionFormComponent>
  ) {
    this.StandardRevisionTypes = this.metadataService.get('StandardRevisionTypes');
  }

  ngOnInit() {
    this.model = cloneDeep(this.data);
  }

  onSubmit() {
    this.dialog.close(this.model);
  }

  isDisabledStandardOption(item) {
    return !item.status;
  }

  isDisabledUserOption(item) {
    return !item.isEnabled || !item.staff.status;
  }


  onStandardChange() {
    let standard = this.model.standard || { department: undefined, drafter: undefined };

    setTimeout(() => {
      this.model.department = standard.department;
      setTimeout(() => {
        this.model.drafter = standard.drafter;
      });
    }, 0);

  }

}