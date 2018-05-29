import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Department } from '../../departments/department';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  model: Post = new Post();
  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: 'read' | 'create' | 'update', id: number },
    private dialog: MatDialogRef<PostFormComponent>,
    private snackBar: MatSnackBar,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    if (this.data.action === 'update' || this.data.action === 'read') {
      this.postsService.getOneById(this.data.id).subscribe((data) => {
        this.model = data;
      });
    } else if (this.data.action === 'create') {
      this.model.department = { id: this.data.id } as Department;
    }
  }

  onSubmit() {
    this.submitting = true;
    this.postsService[this.data.action](this.model).subscribe(() => {
      this.submitting = false;
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      if (status === 423) {
        let { code } = errorResponse.error;
        if (code === 902) {
          this.snackBar.open(`不能停用有员工的岗位！`, null, {
            duration: 3000,
            extraClasses: ['warn']
          });
        } else if (code === 903) {
          this.snackBar.open('不能在作废部门下新建岗位！', null, {
            duration: 3000,
            extraClasses: ['warn']
          });
        }

      }
    });
  }

}
