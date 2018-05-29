import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatIconModule } from '@angular/material';

import { TaskWidgetModule } from '../process-management/tasks/task-widget/task-widget.module';
import { AnnouncementWidgetModule } from '../management/announcements/announcement-widget/announcement-widget.module';
import { LinkWidgetModule } from '../management/data-configuration/links/link-widget/link-widget.module';
import { StandardSystemStandardCategoryChartModule } from '../system-management/standard-system/standard-system-standard-category-chart/standard-system-standard-category-chart.module'
import { SystemMapModule } from './system-map/system-map.module';
import { GuidelineLatestModule } from '../guidelines/guideline-latest/guideline-latest.module';

import { GuidelineWidgetModule } from '../guidelines/guideline-widget/guideline-widget.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule, MatTabsModule, MatIconModule,
    TaskWidgetModule,
    AnnouncementWidgetModule,
    LinkWidgetModule, StandardSystemStandardCategoryChartModule, SystemMapModule,
    GuidelineLatestModule, GuidelineWidgetModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
