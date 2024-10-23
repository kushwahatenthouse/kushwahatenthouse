import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'apx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit,OnChanges {

  constructor() { }

  @Input('type') type:string='normal'; // normal/div
  @Input() fieldType:string='text';
  @Input('full_width') full_width:boolean=true;
  @Input('large_div') large_div:boolean=false;
  @Input('label') label:string='';
  @Input('background') background:string='#ffffff';
  @Input('maxLength') maxLength:number=500;
  @Input('size') size:string='M';
  @Input('value') value:string='';
  @Input("disabled") disabled:boolean=false;
  @Input('searchable') searchable:boolean = false;
  @Input() autofocus:boolean = false;
  @Input() readonly:boolean=false;

  input_style:any={
    'L':{
      'padding':'12px 14px',
      'font':'normal normal normal 15px opensans',
      'margin-ts':'14px',
      'top':'14px','right':'16px',
      'height':'44px'
    },
    'M':{
      'padding':'10px 12px',
      'font':'normal normal normal 14px opensans',
      'margin-ts':'11px',
      'top':'11px','right':'14px',
      'height':'40px'
    },
    'S':{
      'padding':'8px 10px',
      'font':'normal normal normal 13px opensans',
      'margin-ts':'7px',
      'top':'8px','right':'12px',
      'height':'32px'
    }
  }

  @Output() keyup_Event:EventEmitter<any> = new EventEmitter();
  @Output() focus_Event:EventEmitter<any> = new EventEmitter();
  @Output() blur_Event:EventEmitter<any> = new EventEmitter();
  @Output() search_Event:EventEmitter<any> = new EventEmitter();
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  @ViewChild('div_box',{static:false})
  div_box!:ElementRef;


  divTmpValue:string='';

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
    
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'value':
          if(!this.isFocused)
            this.divTmpValue = changes['value']['currentValue'];
        break;
      }
    }
  }

  public lb_plhd:string='';isFocused:boolean = false;
  focused(ty:string){
    this.isFocused = true;
    this.lb_plhd = this.label;
    this.label = ty=='div'?'':this.label;
    this.focus_Event.emit();
    this.valueChange.emit(this.value);
  }
  blured(ty:string,hnd:any=''){
    this.isFocused = false;
    if(ty=='div'){
      let inr = hnd.innerHTML;
      let rg = new RegExp(' ','g'),rg1 = new RegExp('&nbsp;','g');
      let nv = inr.replace(rg,'');nv = nv.replace(rg1,'')
      if(nv==''){
        this.label = this.lb_plhd;
      }
    }
    this.valueChange.emit(this.value);
    this.blur_Event.emit();
  }
  keyupEvent(val:any,val1:string){
    this.value = val1;
    this.keyup_Event.emit({event:val,value:val1});
    this.valueChange.emit(this.value);
  }

  search_result(){
    this.search_Event.emit(this.value);
  }

  showPass:boolean  = false;
  passToggle(){
    this.showPass = !this.showPass;
  }

}
