import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupInfoComponent } from './popup-info.component';
import { AlertModule } from '../alert/alert.module';



@NgModule({
  declarations: [
    PopupInfoComponent
  ],
  imports: [
    AlertModule,
    CommonModule
  ],
  exports: [PopupInfoComponent]
})
export class PopupInfoModule { }