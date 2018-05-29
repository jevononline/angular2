
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { Process } from '../process';
import { ProcessesService } from '../processes.service';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.scss']
})
export class ProcessFormComponent implements OnInit {

  model: Process = new Process();
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', type: number, node: Process },
    private dialog: MatDialogRef<ProcessFormComponent>,
    private snackBar: MatSnackBar,
    private processesService: ProcessesService
  ) {

  }

  ngOnInit() {

    if (this.data.action === 'update' || this.data.action === 'read') {
      this.processesService.getOneById(this.data.node.id).subscribe((data) => {
        this.model = data;
      });
    }
  }


  onSubmit() {
    this.submitting = true;
    this.model.type = this.data.type;

    this.processesService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;

    });

  }

}


