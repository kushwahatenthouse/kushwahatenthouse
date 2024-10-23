import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apx-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  @Input('center') center:boolean=true;
  @Input('color') color:string='#111111';
  @Input('background') background:string='#065dc7';
  @Input('media') media:any=['facebook','twitter','instagram','email','snapchat'];
  @Input('fixed_position') f_position:any=['100px',false,true];// top,left(boolean),right(boolean)
  @Input('media_link') media_link:any={
    'facebook':'https://facebook.com',
    'twitter':'https://twitter.com',
    'instagram':'https://instagram.com',
    'email':'https://email.com',
    'snapchat':'https://snapchat.com'
  }
  @Input('position') position:string='vertical';

  ngOnInit(): void {
  }

  open_page(_link:string){
    window.open(_link,'_blank');
  }

}
