import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsSampleRoutingModule } from './tabs-sample-routing.module';
import { TabsSampleComponent } from './tabs-sample.component';
import { TabsModule } from 'src/app/tabs/tabs.module';


@NgModule({
  declarations: [
    TabsSampleComponent
  ],
  imports: [
    CommonModule,
    TabsModule,
    TabsSampleRoutingModule
  ]
})
export class TabsSampleModule { }
