import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';
import { InViewportPopupComponent } from './in-viewport-popup.component';

@NgModule({
  declarations: [InViewportPopupComponent],
  imports: [
    CommonModule,
    InViewportModule
  ],
  exports:[InViewportPopupComponent]
})
export class InViewportPopupModule { }
