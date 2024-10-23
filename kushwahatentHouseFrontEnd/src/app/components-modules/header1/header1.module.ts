import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApxHeader1Component } from './apx-header1.component';
import { SideSliderModule } from '../side-slider/side-slider.module';
import { ExpandedSubheaderModule } from '../expanded-subheader/expanded-subheader.module';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';


@NgModule({
  declarations: [ApxHeader1Component],
  imports: [
    CommonModule,
    SideSliderModule,
    ExpandedSubheaderModule,
    InputModule,
    ButtonModule
  ],
  exports:[ApxHeader1Component]
})
export class Header1Module { }
