import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticBannerComponent } from './static-banner.component';
import { ButtonModule } from '../../button/button.module';



@NgModule({
  declarations: [
    StaticBannerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [StaticBannerComponent]
})
export class StaticBannerModule { }
