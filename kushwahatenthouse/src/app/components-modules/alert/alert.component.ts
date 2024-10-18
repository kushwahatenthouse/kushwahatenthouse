import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit,OnChanges {

  @Input() title:string='';
  @Input() body:string='';
  @Input() buttons:any=[
    {
      label:'Action',
      type:'text',
      button_type:'primary',
      icon_type:'fa fa-home',
      disabled:false,
      icon_position:'left',
      size:'S'
    },
    {
      label:'Close',
      type:'text',
      button_type:'secondary',
      icon_type:'fa fa-home',
      disabled:false,
      icon_position:'left',
      size:'S'
    }
  ];
  @Input() closable:boolean = true;
  private _showAlert:boolean = true;
  @Input()
    set showAlert(val:boolean){
      this._showAlert = val;
    }
    get showAlert():boolean{
      return this._showAlert;
    }


  @Output() clicked:EventEmitter<string> = new EventEmitter();
  @Output() showAlertChange:EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'showAlert':
          this.showAlert = changes[key]['currentValue'];
        break;
      }
    }
  }

  close_it(){
    this.showAlert=false;
    this.showAlertChange.emit(false)
  }

  button_checked(st:string){
    this.clicked.emit(st);
  }

  closeAlert(val:any){
    if(val.target.className=='apx-alert-outdiv'){
      this.close_it();
    }
  }

}
