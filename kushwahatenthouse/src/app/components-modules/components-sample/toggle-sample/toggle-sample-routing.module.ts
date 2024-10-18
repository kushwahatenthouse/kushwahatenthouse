import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleSampleComponent } from './toggle-sample.component';

const routes: Routes = [{ path: '', component: ToggleSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleSampleRoutingModule { }
