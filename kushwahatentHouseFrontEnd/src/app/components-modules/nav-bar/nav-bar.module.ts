import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavBarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[NavBarComponent]
})
export class NavBarModule { }