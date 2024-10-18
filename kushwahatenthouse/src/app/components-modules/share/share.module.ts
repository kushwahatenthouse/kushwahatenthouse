import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { AlertModule } from '../alert/alert.module';
import { ButtonModule } from '../button/button.module';
import { ShareServiceService } from './share-service.service';



@NgModule({
  declarations: [ShareComponent],
  imports: [
    CommonModule,
    ButtonModule,
    AlertModule
  ],
  exports:[ShareComponent],
  providers:[ShareServiceService]
})
export class ShareModule { }