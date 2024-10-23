import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionSampleRoutingModule } from './accordion-sample-routing.module';
import { AccordionSampleComponent } from './accordion-sample.component';
import {AccordionModule} from './../../accordion/accordion.module';


@NgModule({
  declarations: [
    AccordionSampleComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    AccordionSampleRoutingModule
  ]
})
export class AccordionSampleModule { }
