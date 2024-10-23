import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { SafehtmlPipe } from './safehtml.pipe';



@NgModule({
  declarations: [
    InputComponent,
    SafehtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [InputComponent],
  providers:[]
})
export class InputModule { }
