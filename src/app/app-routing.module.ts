import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'file-viewer', loadChildren: './file-viewer/file-viewer.module#FileViewerModule' },
  { path: '**', component: NotFoundComponent, data: { title: '页面不存在' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
