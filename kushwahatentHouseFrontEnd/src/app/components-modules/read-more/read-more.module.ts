import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ReadMoreComponent } from './read-more.component';
import { MathJAXModule } from '../math-jax/math-jax.module';


@NgModule({
    declarations: [ReadMoreComponent],
    imports: [
        MathJAXModule,
        SharedModuleModule,
        CommonModule,
    ],
    exports:[ReadMoreComponent]
  })
  export class ReadMoreModule { }