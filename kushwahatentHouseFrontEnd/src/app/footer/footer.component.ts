import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public emailAddress:string = 'rajesh16a1051@gmail.com';
  public mobileNo:number = 7488357495;
  public socialMediaLink:any = {
    'facebook':'https://facebook.com',
    'instagram':'https://instragram.com',
    'youtube':'https://youtube.com',
    'twitter':'https:twitter.com'
  }

}
