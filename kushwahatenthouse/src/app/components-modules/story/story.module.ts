import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports:[StoryComponent]
})
export class StoryModule { }
