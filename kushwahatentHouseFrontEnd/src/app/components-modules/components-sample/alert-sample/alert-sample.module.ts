import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertSampleRoutingModule } from './alert-sample-routing.module';
import { AlertSampleComponent } from './alert-sample.component';
import { AlertModule } from 'src/app/alert/alert.module';
import { ButtonModule } from 'src/app/button/button.module';


@NgModule({
  declarations: [
    AlertSampleComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    ButtonModule,
    AlertSampleRoutingModule
  ]
})
export class AlertSampleModule { }
