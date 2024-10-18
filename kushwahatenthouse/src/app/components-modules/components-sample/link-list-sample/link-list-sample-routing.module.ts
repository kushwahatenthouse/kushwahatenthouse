import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkListSampleComponent } from './link-list-sample.component';

const routes: Routes = [{ path: '', component: LinkListSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkListSampleRoutingModule { }
