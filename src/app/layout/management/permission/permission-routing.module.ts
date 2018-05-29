import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permission.component';

const routes: Routes = [
  {
    path: '', component: PermissionComponent,
    children: [
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'roles', loadChildren: './roles/roles.module#RolesModule' },
      { path: 'privileges', loadChildren: './privileges/privileges.module#PrivilegesModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
