import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonComponent } from './app-button.component';



@NgModule({
  declarations: [
    AppButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppButtonComponent]
})
export class AppButtonModule { }
