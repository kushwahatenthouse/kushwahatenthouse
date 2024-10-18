import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'apx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('date') date:string='1008888888777';//
  @Input('highlight1') highlight1:string='view';//
  @Input('h1_value') h1_value:string='1328888883';//
  @Input('highlight2') highlight2:string='like';//
  @Input('h2_value') h2_value:string='223';//
  @Input('highlight3') highlight3:string='comment';//
  @Input('h3_value') h3_value:string='22';//
  constructor() { }

  full_image_link:string='';
  ngOnInit(): void {
  }

  return_short_form(val:string):string{
    let n:number = parseInt(val);
    if(n<1000){
      return val;
    }else{

      let f1 = val.substring(0,1);
      let f2 = val.substring(1,3);
      let id = n >1000000?'M':'K';
      let f = f1+'.'+f2+id;
      return f;

    }
  }

  hide_full_image:boolean=false;
  full_image(link:string){
    this.hide_full_image=true;
    this.full_image_link = link;
  }

}
