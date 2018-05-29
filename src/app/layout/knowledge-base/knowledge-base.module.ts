import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingSoonModule } from '../../shared/';

import { KnowledgeBaseRoutingModule } from './knowledge-base-routing.module';
import { KnowledgeBaseComponent } from './knowledge-base.component';

@NgModule({
  imports: [
    CommonModule,
    ComingSoonModule,
    KnowledgeBaseRoutingModule
  ],
  declarations: [KnowledgeBaseComponent]
})
export class KnowledgeBaseModule { }
