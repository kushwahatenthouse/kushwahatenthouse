import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineAlertComponent } from './inline-alert.component';



@NgModule({
  declarations: [
    InlineAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [InlineAlertComponent]
})
export class InlineAlertModule { }
