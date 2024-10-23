import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkListComponent } from './link-list.component';
import { FormatNumberPipe } from '../custom-pipe/format-number.pipe';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [
    LinkListComponent,
    FormatNumberPipe
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [LinkListComponent]
})
export class LinkListModule { }
