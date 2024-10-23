import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingledropdownSampleComponent } from './singledropdown-sample.component';

const routes: Routes = [{ path: '', component: SingledropdownSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingledropdownSampleRoutingModule { }
