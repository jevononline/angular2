import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';

import { Department } from '../department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {

  model: Department = new Department();
  submitting: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', node: Department },
    private dialog: MatDialogRef<DepartmentFormComponent>,
    private snackBar: MatSnackBar,
    private departmentsService: DepartmentsService
  ) {

  }

  ngOnInit() {
    if (this.data.action === 'update' || this.data.action === 'read') {
      this.departmentsService.getOneById(this.data.node.id).subscribe((data) => {
        this.model = data;
      });
    } else if (this.data.action === 'create') {
      this.model.parent = this.data.node;
    }
  }


  onSubmit() {
    this.submitting = true;
    this.departmentsService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      this.snackBar.open('操作失败', null, {
        duration: 3000,
        extraClasses: ['warn']
      });

    });

  }

}
