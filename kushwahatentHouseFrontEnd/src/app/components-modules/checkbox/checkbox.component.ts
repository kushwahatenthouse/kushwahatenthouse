import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input('label') label='Label';

  private _state:string = 'Unselected';
  @Input()
    set state(val:string){
      this._state = val;
    }
    get state():string{
      return this._state;
    }

  @Input('type') type='primary';
  @Input('disable')disable=false;
  @Input('width') width='Auto';
  @Input('error') error=false;
  @Input() preventClick:boolean = false;
  @Input('checkbox_only') checkbox_only=false; // checkbox will be checked only through checkbox,
  @Input('size') size='S';

  @Output() label_click:EventEmitter<any> = new EventEmitter;
  @Output() checkbox_click:EventEmitter<any> = new EventEmitter;
  @Output() stateChange:EventEmitter<any> = new EventEmitter;

  public size_data:any = {
    'S':{
      'dimension':'16px',
      'top':''
    },
    'L':{
      'dimension':'24px',
      'top':'4px'
    }
  }

  width_type:string='';

  constructor() { }

  ngOnInit(): void {
    this.width_type = this.width=='Auto'?'fit-content':'max-content';
  }
  prv_state:number=2;
  clicked(id:any='',e:any=''){
    if(this.preventClick || this.label_clicked_s){
      id.checked = this.state=='Selected'?true:false;
      e.stopPropagation();
      e.preventDefault();
      this.emitEvent();
      return;
    }

    this.state = id.checked ? 'Selected':'Unselected';
    this.emitEvent(id.checked);

    // if(this.preventClick)
    //   this.prevent(e);

    // if(this.label_clicked_s){
    //   e.stopPropagation();
    //   e.preventDefault();
    // }
    // if((this.prv_state==1 && id.checked) || (this.prv_state==0 && !id.checked) || this.prv_state==2){
    //   let cnd = (this.checkbox_only && !this.label_clicked_s) ? id.checked : !id.checked;
    //   this.checkbox_click.emit(cnd);
    //   this.state = cnd ? 'Selected':'Unselected';
    //   id.checked = cnd;
    //   console.log(this.state,id.checked,'clicked')
    // }
    // this.prv_state = id.checked?1:0;

    
  }

  prev_state:boolean=false;label_clicked_s:boolean=false;
  label_clicked(id:any){
    
    if(!this.checkbox_only)return;
    this.prev_state = id.checked;
    this.label_clicked_s = this.checkbox_only?true:false;
    
    let cs = this.label_clicked_s?id.checked:!id.checked;
    setTimeout(()=>{
      this.label_clicked_s = false;
    },1200)
    this.label_click.emit(cs);

    console.log(this.state,id.checked,'label_clicked',cs)
  }

  prevent(e:any){
    e.stopPropagation();
    e.preventDefault();
  }

  emitEvent(st?:boolean){
    this.stateChange.emit(this.state);
    this.checkbox_click.emit(st)
  }

}
