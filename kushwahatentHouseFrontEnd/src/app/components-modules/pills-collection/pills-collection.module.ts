import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsCollectionComponent } from './pills-collection.component';
import { PillsModule } from '../pills/pills.module';



@NgModule({
  declarations: [
    PillsCollectionComponent
  ],
  imports: [
    CommonModule,
    PillsModule
  ],
  exports: [PillsCollectionComponent]
})
export class PillsCollectionModule { }
