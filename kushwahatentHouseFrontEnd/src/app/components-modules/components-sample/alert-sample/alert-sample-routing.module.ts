import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertSampleComponent } from './alert-sample.component';

const routes: Routes = [{ path: '', component: AlertSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertSampleRoutingModule { }
