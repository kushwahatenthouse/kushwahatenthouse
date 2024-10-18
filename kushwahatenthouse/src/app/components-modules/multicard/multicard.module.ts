import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulticardComponent } from './multicard.component'

@NgModule({
  declarations: [MulticardComponent],
  imports: [
    CommonModule
  ],
  exports:[MulticardComponent]
})
export class MulticardModule { }
