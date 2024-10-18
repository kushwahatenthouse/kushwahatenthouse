import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputSampleRoutingModule } from './input-sample-routing.module';
import { InputSampleComponent } from './input-sample.component';
import { InputModule } from 'src/app/input/input.module';


@NgModule({
  declarations: [
    InputSampleComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    InputSampleRoutingModule
  ]
})
export class InputSampleModule { }
