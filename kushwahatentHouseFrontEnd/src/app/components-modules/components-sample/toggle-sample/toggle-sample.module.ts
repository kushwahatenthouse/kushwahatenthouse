import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleSampleRoutingModule } from './toggle-sample-routing.module';
import { ToggleSampleComponent } from './toggle-sample.component';
import { ToggleModule } from 'src/app/toggle/toggle.module';


@NgModule({
  declarations: [
    ToggleSampleComponent
  ],
  imports: [
    CommonModule,
    ToggleModule,
    ToggleSampleRoutingModule
  ]
})
export class ToggleSampleModule { }
