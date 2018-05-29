
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { Process } from '../process';
import { ProcessesService } from '../processes.service';

@Component({
  selector: 'app-process-settings',
  templateUrl: './process-settings.component.html',
  styleUrls: ['./process-settings.component.scss']
})
export class ProcessSettingsComponent implements OnInit {

  model: any = {};
  submitting: boolean = false;
  isCompleted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Process,
    private dialog: MatDialogRef<ProcessSettingsComponent>,
    private snackBar: MatSnackBar,
    private processesService: ProcessesService
  ) {

  }

  ngOnInit() {
    this.processesService.getOneById(this.data.id).subscribe(data => {
      if (data) {
        this.isCompleted = !!data.isCompleted;
        if (data.data) {
          this.model = data.data;
        }
      }
    });
  }


  onSubmit() {
    this.submitting = true;

    this.processesService.setSettings(this.data.id, this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;

    });

  }

}



