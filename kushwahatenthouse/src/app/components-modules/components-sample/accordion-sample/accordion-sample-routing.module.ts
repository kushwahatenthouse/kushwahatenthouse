import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionSampleComponent } from './accordion-sample.component';

const routes: Routes = [{ path: '', component: AccordionSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordionSampleRoutingModule { }
