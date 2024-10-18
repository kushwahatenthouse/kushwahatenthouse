import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apx-scroll-card',
  templateUrl: './scroll-card.component.html',
  styleUrls: ['./scroll-card.component.css']
})
export class ScrollCardComponent implements OnInit {

  constructor() { }

  @Input('type') type:string='product1';//image,product1,product2

  ngOnInit(): void {
    
  }

  add_wishlist(event:any,id:string){
    let el = event.target;
    if(el.classList.contains('fa-heart-o')){
      el.classList.add('fa-heart','color-red');
      el.classList.remove('fa-heart-o','color-white');
    }else{
      el.classList.remove('fa-heart','color-red');
      el.classList.add('fa-heart-o','color-white');
    }
  }

}
