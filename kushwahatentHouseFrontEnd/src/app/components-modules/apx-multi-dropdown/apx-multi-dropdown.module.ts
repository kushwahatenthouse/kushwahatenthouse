import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ApxMultiDropdownComponent } from './apx-multi-dropdown.component';
import { PillsModule } from '../pills/pills.module';
import { CheckboxModule } from '../checkbox/checkbox.module';



@NgModule({
  declarations: [
    ApxMultiDropdownComponent
  ],
  imports: [
    ButtonModule,
    PillsModule,
    CheckboxModule,
    CommonModule
  ],
  exports: [ApxMultiDropdownComponent]
})
export class ApxMultiDropdownModule { }
