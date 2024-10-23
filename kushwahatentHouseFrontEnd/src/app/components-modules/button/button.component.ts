import { Component, OnInit,Input, Output,EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input("label") label:any="Button";
  @Input("size") size:string="L";
  @Input() round_label:string='';
  @Input("width") width_type:string='limited';//limited/full
  @Input("disabled") disable:boolean=false;
  @Input("button_type") button_type:string="Primary";
  @Input("type") type:string="text";// icon/text/icon_text
  @Input("icon_type") icon_type:string="fa fa-home";
  @Input("icon_position") icon_position:string='left';
  @Input() icon_color:string = '';
  @Input() icon_size:string = '';

  @Output() clicked:EventEmitter<any> = new EventEmitter();

  button_style:any={
    'L':{
      'padding':'0px 24px',
      'font':'normal normal normal 18px opensans',
      'height':'48px'
    },
    'M':{
      'padding':'0px 20px',
      'font':'normal normal normal 16px opensans',
      'height':'40px'
    },
    'S':{
      'padding':'0px 16px',
      'font':'normal normal normal 14px opensans',
      'height':'32px'
    },
    'XS':{
      'padding':'0px 12px',
      'font':'normal normal normal 12px opensans',
      'height':'28px'
    },
    'full':{
      'width':'100%'
    },
    'limited':{
      'width':'none'
    },
    'icon':{
      'L':{
        'size':'48px',
        'icon_size':'24px'
      },
      'M':{
        'size':'40px',
        'icon_size':'20px'
      },
      'S':{
        'size':'32px',
        'icon_size':'16px'
      },
      'XS':{
        'size':'28px',
        'icon_size':'14px'
      }
    }

  }

  idle_state:boolean=true;
  hover_state:boolean=false;
  clicked_state:boolean=false;
  box_shadow:boolean=true;
  key:any;

  ngOnInit(): void {
  }

  key_press(){
    this.clicked_state=true;
    this.hover_state=true;
  }
  key_up(event:KeyboardEvent){
    this.clicked_state=false;
    this.hover_state=true;
    if(event.key=='Enter' || event.keyCode==13){
      this.clicked.emit();
    }
  }

  key_up1(){
    this.clicked_state = false;
    this.hover_state =true;
    this.clicked.emit();
  }

  focus(){
    if(!this.clicked_state){
      this.idle_state = false;
      this.hover_state = true;
    }
    this.box_shadow = false;
  }
  blur(hnd:any){
    if(!this.clicked_state){
      this.idle_state=true;
      this.hover_state=false;
    }
    hnd.blur();
    this.box_shadow = true;
  }

}
