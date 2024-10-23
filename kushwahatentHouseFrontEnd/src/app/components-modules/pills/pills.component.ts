import { Component, OnInit,Input, Output,EventEmitter, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.css']
})
export class PillsComponent implements OnInit {
  

  constructor() { }

  @Input("label") label:string="SelectMe";
  @Input("size") size:string="L";
  @Input("width") width_type:string='limited';
  @Input("disabled") disable:boolean=false;
  @Input("icon_position") icon_position:string='';
  @Input("icon_name") icon_name:string="fa fa-home";
  @Input("selected") selected:boolean=false;
  @Input("color") color:string="#111";
  @Input("background") background:string="#ffffff";
  @Input('unSelectable') unSelectable:boolean = false;
  @Input("selectedState") selectedState:any={
    background:'red',
    color:'white'
  };

  @ViewChild('b_b') b_b!:ElementRef;

  @Output() clicked:EventEmitter<any> = new EventEmitter();

  button_style:any={
    'L':{
      'padding':'12px 21px',
      'font':'normal normal normal 13px opensans',
      'top':'0px',
      right:'17px',left:'16px'
    },
    'M':{
      'padding':'10px 22px',
      'font':'normal normal normal 13px opensans',
      'top':'0px',
      right:'17px',left:'16px'
    },
    'S':{
      'padding':'8px 18px',
      'font':'normal normal normal 12px opensans',
      'top':'0px',
      right:'14px',left:'14px'
    },
    'XS':{
      'padding':'6px 16px',
      'font':'normal normal normal 12px opensans',
      'top':'0px',
      right:'14px',left:'12px'
    },
    'full':{
      'width':'100%'
    },
    'limited':{
      'width':'none'
    }

  }

  idle_state:boolean=true;
  hover_state:boolean=false;
  clicked_state:boolean=false;
  box_shadow:boolean=true;
  key:any;
  box_shadowd: string=' inset 0 0 0 1px '+this.color;

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges){
    for(let key in changes){
      switch(key){
        case 'selected':
          this.selected = changes[key].currentValue;
        break;
      }
    }
  }

  key_press(){
    // this.clicked_state=true;
    // this.hover_state=true;
  }
  key_up(event:KeyboardEvent){
    // this.clicked_state=false;
    // this.hover_state=true;
    if(event.key=='Enter' || event.keyCode==13){
      this.clicked.emit({'event':'enter'});
    }
  }

  key_up1(){
    // this.clicked_state = false;
    // this.hover_state =true;
    //this.clicked.emit({'event':'keyup'});
  }

  focus(){
    // if(!this.clicked_state){
    //   this.idle_state = false;
    //   this.hover_state = true;
    // }
    // this.box_shadow = false;
  }
  blur(hnd:any){
    // if(!this.clicked_state){
    //   this.idle_state=true;
    //   this.hover_state=false;
    // }
    // hnd.blur();
    // this.box_shadow = true;
  }

  selectme(hnd:any){
    if(this.selected && this.unSelectable)return;
    this.selected = this.b_b.nativeElement.classList.contains('apx-pills-selected')?false:true;
    this.clicked.emit({'label':this.label,'state':this.selected,'event':'click'})
  }

}
