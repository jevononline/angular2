import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { TreeviewService } from '../../../../../core/treeview/treeview.service';
import { Department } from '../../departments/department';
import { Post } from '../../posts/post';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.scss']
})
export class StaffFormComponent implements OnInit {

  model: Staff = new Staff();

  departments: Department[] = [];

  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', id: number, departments: Department[], posts: Post[] },
    private dialog: MatDialogRef<StaffFormComponent>,
    private snackBar: MatSnackBar,
    @Optional() private treeviewService: TreeviewService,
    private staffService: StaffService
  ) { }

  ngOnInit() {

    if (this.data.action === 'update' || this.data.action === 'read') {
      this.model.id = this.data.id;
      this.staffService.getOneById(this.data.id).subscribe((data) => {
        this.model = data;
        this.departments = data.posts.map(item => ({ id: item.department.id } as Department));
      });
    } else if (this.data.action === 'create') {
      this.model.id = 0;
      this.departments = [{ id: this.data.id }] as Department[];

    }
  }



  onSubmit() {
    this.submitting = true;

    this.staffService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      if (this.treeviewService) {
        this.treeviewService.refresh();
      }
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      if (status === 409) {
        let { code } = errorResponse.error;
        if (code === 901) {
          this.snackBar.open('员工号已使用！', null, { duration: 3000, extraClasses: ['warn'] });
        } else if (code === 902) {
          this.snackBar.open('邮箱已使用！', null, { duration: 3000, extraClasses: ['warn'] });
        } else if (code === 903) {
          this.snackBar.open('手机号码已使用！', null, { duration: 3000, extraClasses: ['warn'] });
        }
      } else if (status === 423) {
        let { code } = errorResponse.error;
        if (code === 905) {
          let { errorData } = errorResponse.error;
          this.snackBar.open(`不能设置为离职，${this.model.fullName}是${errorData.map(item => item.name).toString()}的分管领导`, null, { duration: 3000, extraClasses: ['warn'] });
        }

      }
    });
  }

}
