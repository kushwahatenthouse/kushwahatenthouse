import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
