import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'announcements',
    children: [
      { path: '', loadChildren: './announcements/announcements.module#AnnouncementsModule', data: { title: '公告管理' } },
      { path: ':form', loadChildren: './announcements/announcement-form/announcement-form.module#AnnouncementFormModule' }
    ]
  },
  { path: 'org', loadChildren: './org/org.module#OrgModule', data: { title: '组织架构' } },
  { path: 'permission', loadChildren: './permission/permission.module#PermissionModule' },
  { path: 'data-configuration', loadChildren: './data-configuration/data-configuration.module#DataConfigurationModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
