import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';



@NgModule({
    providers:[ToastService],
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToastComponent]
})
export class ToastModule { }