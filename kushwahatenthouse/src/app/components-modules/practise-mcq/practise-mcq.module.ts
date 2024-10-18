import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PractiseMcqComponent } from './practise-mcq.component';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TagsModule } from '../tags/tags.module';
import { ReadMoreModule } from '../read-more/read-more.module';
import { MathJAXModule } from '../math-jax/math-jax.module';
import { InViewportModule } from 'ng-in-viewport';
import { InViewPortDirective } from './in-view-port.directive';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [PractiseMcqComponent, InViewPortDirective,InViewPortDirective],
    imports: [
        ButtonModule,
        InputModule,
        SharedModuleModule,
        TagsModule,
        ReadMoreModule,
        RouterModule,
        MathJAXModule,
        InViewportModule,
        CommonModule,
    ],
    exports:[PractiseMcqComponent]
  })
  export class PractiseMCQModule { }