import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InlineAlertSampleComponent } from './inline-alert-sample.component';

const routes: Routes = [{ path: '', component: InlineAlertSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineAlertSampleRoutingModule { }
