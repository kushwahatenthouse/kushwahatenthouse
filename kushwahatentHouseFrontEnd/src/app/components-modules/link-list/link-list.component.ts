import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class LinkListComponent implements OnInit {

  @Input() title:string='';
  @Input() data:any=[];

  @Input('size') size:string='S';//S/M

  size_style:any={
    'S':{
      'height':'20px',
      'url_font':'12px',
      'str_font':'14px'
    },
    'M':{
      'height':'24px',
      'url_font':'14px',
      'str_font':'16px'
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  shorting_num(n:number):string{
    let sn=n+'';
    if(n>999 && n< 99999){
      let nn = n/1000+'';
      sn = nn.substring(0,3)+'K';
    }else if(n>99999){
      let nn = n/1000000+'';
      sn = nn.substring(0,3)+'M';
    }
    return sn;
  }

}
