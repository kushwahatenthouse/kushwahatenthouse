import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkListSampleRoutingModule } from './link-list-sample-routing.module';
import { LinkListSampleComponent } from './link-list-sample.component';
import { LinkListModule } from 'src/app/link-list/link-list.module';


@NgModule({
  declarations: [
    LinkListSampleComponent
  ],
  imports: [
    CommonModule,
    LinkListModule,
    LinkListSampleRoutingModule
  ]
})
export class LinkListSampleModule { }
