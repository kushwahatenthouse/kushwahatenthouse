import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PillsCollectionSampleRoutingModule } from './pills-collection-sample-routing.module';
import { PillsCollectionSampleComponent } from './pills-collection-sample.component';
import { PillsCollectionModule } from 'src/app/pills-collection/pills-collection.module';


@NgModule({
  declarations: [
    PillsCollectionSampleComponent
  ],
  imports: [
    CommonModule,
    PillsCollectionSampleRoutingModule,
    PillsCollectionModule
  ]
})
export class PillsCollectionSampleModule { }
