import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InlineAlertSampleRoutingModule } from './inline-alert-sample-routing.module';
import { InlineAlertSampleComponent } from './inline-alert-sample.component';
import { InlineAlertModule } from 'src/app/inline-alert/inline-alert.module';


@NgModule({
  declarations: [
    InlineAlertSampleComponent
  ],
  imports: [
    CommonModule,
    InlineAlertModule,
    InlineAlertSampleRoutingModule
  ]
})
export class InlineAlertSampleModule { }
