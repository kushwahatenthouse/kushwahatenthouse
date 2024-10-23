import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsSampleComponent } from './tabs-sample.component';

const routes: Routes = [{ path: '', component: TabsSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsSampleRoutingModule { }
