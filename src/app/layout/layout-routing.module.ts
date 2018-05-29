import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';
import { MetadataResolve } from '../core/metadata/metadata-resolve';
import { AuthResolve } from '../core/auth/auth-resolve';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [AuthGuardService],
    resolve: {
      metadata: MetadataResolve,
      auth: AuthResolve
    },
    children: [
      { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'announcing', loadChildren: './announcing/announcing.module#AnnouncingModule' },

      {
        path: 'guidelines',
        children: [
          { path: '', loadChildren: './guidelines/guidelines.module#GuidelinesModule' },
          { path: ':form', loadChildren: './guidelines/guideline-form/guideline-form.module#GuidelineFormModule' },
        ]
      },
      {
        path: 'system-management', loadChildren: './system-management/system-management.module#SystemManagementModule'
      },
      {
        path: 'standard-system-org-management', loadChildren: './standard-system-org-management/standard-system-org-management.module#StandardSystemOrgManagementModule'
      },
      {
        path: 'standard-management', loadChildren: './standard-management/standard-management.module#StandardManagementModule'
      },
      {
        path: 'superior-documents',
        children: [
          { path: '', loadChildren: './superior-documents/superior-documents.module#SuperiorDocumentsModule' },
          { path: ':form', loadChildren: './superior-documents/superior-document-form/superior-document-form.module#SuperiorDocumentFormModule' }
        ]
      },
      {
        path: 'regulations',
        children: [
          { path: '', loadChildren: './regulations/regulations.module#RegulationsModule' },
          { path: ':form', loadChildren: './regulations/regulation-form/regulation-form.module#RegulationFormModule' },
        ]
      },
      { path: 'process-management', loadChildren: './process-management/process-management.module#ProcessManagementModule' },
      { path: 'cost-management', loadChildren: './cost-management/cost-management.module#CostManagementModule' },
      { path: 'evaluations', loadChildren: './evaluations/evaluations.module#EvaluationsModule' },
      { path: 'training', loadChildren: './training/training.module#TrainingModule' },
      { path: 'standard-analytics', loadChildren: './standard-analytics/standard-analytics.module#StandardAnalyticsModule' },
      { path: 'online-editing', loadChildren: './online-editing/online-editing.module#OnlineEditingModule' },
      { path: 'knowledge-base', loadChildren: './knowledge-base/knowledge-base.module#KnowledgeBaseModule' },
      { path: 'management', loadChildren: './management/management.module#ManagementModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
