import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'apx-side-slider',
  templateUrl: './side-slider.component.html',
  styleUrls: ['./side-slider.component.css']
})
export class SideSliderComponent implements OnInit {

  @Input('nav_width') nav_width:string='0px';
  @Input('slider_data') slider_data:any=[];

  _show_slider:boolean = false;
  @Input()
  set show_slider(val:boolean){
    this._show_slider = val;
    this.nav_toggle();
  }
  get show_slider():boolean{
    return this._show_slider;
  }

  @Output() clicked:EventEmitter<any> = new EventEmitter;

  constructor() { }


  ngOnInit(): void {
  }
  nav_toggle_came:boolean=false;
  nav_toggle(){
    if (typeof document == 'undefined' || typeof window == 'undefined') 
      return;

    this.nav_width = this.nav_width=='0px'?'-75%':'0px';
    this.nav_toggle_came = this.nav_width=='-75%'?true:false;
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    if(!this.nav_toggle_came){
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.right='0px';
      body.style.left='0px';
      body.style.top = `-${scrollY}`;
    }else{
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.right='';
      body.style.left='';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    // window.addEventListener('scroll', () => {
    //   document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    // });
  }


  optionClicked(val:any){
    this.clicked.emit(val);
    setTimeout(() => {
      this.nav_toggle();
    }, 200);
  }


}
