import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonSampleComponent } from './button-sample.component';

const routes: Routes = [{ path: '', component: ButtonSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonSampleRoutingModule { }
