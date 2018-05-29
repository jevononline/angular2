import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'standards',
        children: [
          { path: '', loadChildren: './standards/standards.module#StandardsModule' }, // path:'',默认，“标准”的标准，以后加其他标准，在这里增加children即可
          { path: ':form', loadChildren: './standards/standard-form/standard-form.module#StandardFormModule' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardManagementRoutingModule { }
