import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PillsCollectionSampleComponent } from './pills-collection-sample.component';

const routes: Routes = [{ path: '', component: PillsCollectionSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PillsCollectionSampleRoutingModule { }
