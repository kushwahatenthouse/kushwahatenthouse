import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathLinkComponent } from './path-link.component';

@NgModule({
  declarations: [
    PathLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PathLinkComponent]
})
export class PathLinkModule { }
