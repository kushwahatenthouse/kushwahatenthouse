import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillsSampleRoutingModule } from './pills-sample-routing.module';
import { PillsSampleComponent } from './pills-sample.component';
import { PillsModule } from 'src/app/pills/pills.module';


@NgModule({
  declarations: [
    PillsSampleComponent
  ],
  imports: [
    CommonModule,
    PillsSampleRoutingModule,
    PillsModule
  ]
})
export class PillsSampleModule { }
