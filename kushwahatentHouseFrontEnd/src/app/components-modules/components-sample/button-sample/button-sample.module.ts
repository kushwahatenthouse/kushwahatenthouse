import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonSampleRoutingModule } from './button-sample-routing.module';
import { ButtonSampleComponent } from './button-sample.component';
import { AppButtonModule } from 'src/app/testing-dir/app-button/app-button.module';
import { ButtonModule } from 'src/app/button/button.module';
import { AlertModule } from 'src/app/alert/alert.module';


@NgModule({
  declarations: [
    ButtonSampleComponent
  ],
  imports: [
    CommonModule,
    AppButtonModule,
    ButtonModule,
    AlertModule,
    ButtonSampleRoutingModule
  ]
})
export class ButtonSampleModule { }
