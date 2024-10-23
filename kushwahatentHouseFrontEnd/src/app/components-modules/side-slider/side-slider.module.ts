import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideSliderComponent } from './side-slider.component';
import { ButtonModule } from '../button/button.module';
import { TreeListModule } from '../tree-list/tree-list.module';



@NgModule({
  declarations: [SideSliderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TreeListModule
  ],
  exports:[SideSliderComponent]
})
export class SideSliderModule { }
