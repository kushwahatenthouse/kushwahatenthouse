import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PillsSampleComponent } from './pills-sample.component';

const routes: Routes = [{ path: '', component: PillsSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PillsSampleRoutingModule { }
