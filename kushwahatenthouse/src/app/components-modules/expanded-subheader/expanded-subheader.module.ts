import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandedSubheaderComponent } from './expanded-subheader.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ExpandedSubheaderComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[ExpandedSubheaderComponent]
})
export class ExpandedSubheaderModule { }
