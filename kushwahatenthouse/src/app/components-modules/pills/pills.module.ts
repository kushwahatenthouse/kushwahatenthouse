import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsComponent } from './pills.component';



@NgModule({
  declarations: [
    PillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PillsComponent]
})
export class PillsModule { }
