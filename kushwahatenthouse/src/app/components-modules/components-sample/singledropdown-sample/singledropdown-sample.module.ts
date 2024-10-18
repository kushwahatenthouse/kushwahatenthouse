import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingledropdownSampleRoutingModule } from './singledropdown-sample-routing.module';
import { SingledropdownSampleComponent } from './singledropdown-sample.component';
import { ApxSingleDropdownModule } from 'src/app/apx-single-dropdown/apx-single-dropdown.module';


@NgModule({
  declarations: [
    SingledropdownSampleComponent
  ],
  imports: [
    CommonModule,
    ApxSingleDropdownModule,
    SingledropdownSampleRoutingModule
  ]
})
export class SingledropdownSampleModule { }
