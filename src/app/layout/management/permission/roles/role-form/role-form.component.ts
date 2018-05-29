import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Privilege } from '../../privileges/privilege';
import { Role } from '../role';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss']
})
export class RoleFormComponent implements OnInit {
  model = new Role();
  submitting = false;
  action: string;
  constructor(private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private rolesService: RolesService) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {

    if (this.action === 'update') {
      let id = +this.route.snapshot.params.id;
      this.model.id = id;
      this.rolesService.getOneById(id).subscribe(data => {
        this.model = data;
      });
    } else if (this.action === 'create') {
      this.model.id = 0;

    }
  }

  onSubmit() {
    this.rolesService[this.action](this.model).subscribe(() => {
      this.router.navigate(['/management/permission/roles']);
    }, (errorResponse: HttpErrorResponse) => {
      let { status } = errorResponse;
      if (status === 409) {
        this.snackBar.open('创建角色失败，角色名称被占用', null, { extraClasses: ['warn'] });
      }
    });
  }
}
