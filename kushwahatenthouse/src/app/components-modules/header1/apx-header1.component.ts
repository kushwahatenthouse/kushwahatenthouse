import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ImpFunctionService } from '../imp_function/imp-function.service';

@Component({
  selector: 'apx-header1',
  templateUrl: './apx-header1.component.html',
  styleUrls: ['./apx-header1.component.css']
})
export class ApxHeader1Component implements OnInit,OnChanges {

  @Input('data') data:any=[];

  @Input('isLoggedIn') isLoggedIn:boolean = false;
  @Input('logging') logging:boolean=false;
  @Input('userName') userName:string='';
  @Input('search') search:boolean = false;
  @Input('sticky_header') sticky_header:boolean=true;

  @Input() headerText:string='';


  @Output() search_keyupevent:EventEmitter<any> = new EventEmitter();
  @Output() search_clicked:EventEmitter<any> = new EventEmitter();
  @Output() footer_clicked:EventEmitter<any> = new EventEmitter();
  
  @Input() tg_slider:boolean=false;
  @Output() tg_sliderChange:EventEmitter<boolean> = new EventEmitter();

  search_result:any=[
  ];

  currentPage:string='';isMobile:boolean = false;
  constructor(private router:Router,private impFunc:ImpFunctionService) { 
    router.events.subscribe((data)=>{
      if(data instanceof NavigationEnd){
        this.currentPage = data.url;
        this.isMobile = this.impFunc.is_mobile();
      }
    })
  }

  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void{
    for(let key in changes){
      switch(key){
        case 'isLoggedIn':
          this.isLoggedIn = changes[key].currentValue;
        break;
        case 'userName':
          this.userName = changes[key].currentValue;
        break;
        case 'logging':
          this.logging = changes[key].currentValue;
        break;
      }
    }
  }

  toggle_slider(){
    this.tg_slider=!this.tg_slider;
    this.tg_sliderChange.emit(this.tg_slider);
  }

  keyupEvent(val:any){
    if(val.value.length > 0){
      this.search_result = [
        {
          text:'<div class="flex-container"><div class="left-flex40"><img src="../../../assets/book.jpg" class="width-100"></div><div class="flex-grow l-padding-8" >Physics Book<br><span class="midnightblue-cl font-80 bold">By SS Ratan</span></div></div>'
        },
        {
          text:'<div class="flex-container"><div class="left-flex40 center"><i class="fa fa-search"></i></div><div class="flex-grow l-padding-8" >Physics Search <b>Res</b>ult</div></div>'
        },
        {
          text:'<div class="flex-container"><div class="left-flex40 center"><i class="fa fa-search"></i></div><div class="flex-grow l-padding-8" >Physics Search <b>Res</b>ult</div></div>'
        }
      ]
    }
    this.search_keyupevent.emit(val);
  }

  search_click(val:string){
    this.search_clicked.emit(val);
    console.log(val,'search')
  }

  btn_clicked(val:boolean){
    this.footer_clicked.emit(val)
  }

  changedSliderStatus(){
    this.tg_sliderChange.emit(this.tg_slider);
  }

}
