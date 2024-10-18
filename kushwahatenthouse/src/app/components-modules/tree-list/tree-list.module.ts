import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeListComponent } from './tree-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TreeListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[TreeListComponent]
})
export class TreeListModule { }
