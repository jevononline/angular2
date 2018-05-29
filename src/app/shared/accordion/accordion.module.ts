import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from '../collapse/collapse.module';
import { AccordionComponent, AccordionGroupComponent, AccordionHeaderDirective, AccordionBodyDirective } from './accordion.component';


@NgModule({
  imports: [
    CommonModule,
    CollapseModule
  ],
  declarations: [AccordionComponent, AccordionGroupComponent, AccordionHeaderDirective, AccordionBodyDirective],
  exports: [AccordionComponent, AccordionGroupComponent, AccordionHeaderDirective, AccordionBodyDirective]
})
export class AccordionModule { }
