import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'apx-inline-alert',
  templateUrl: './inline-alert.component.html',
  styleUrls: ['./inline-alert.component.css']
})
export class InlineAlertComponent implements OnInit {

  constructor() { }

  @Input('data') data:any={
    'title':'title of inline alert',
    'icon':'fa fa-info-circle',
    'msg':'inline alert description for this event and all details for this inline alert',
    'type':'info',
    'close':false
  }

  @Input() singleLine:boolean = false;

  style_type:any={
      'alert':['alert-bg','alert-c','alert-br'],
      'info':['info-alert-bg','info-alert-c','info-alert-br'],
      'message':['message-alert-bg','message-alert-c','message-alert-br']
  }
  
  show_inline_alt:boolean=true;

  ngOnInit(): void {
  }

  close_alert(){
    this.show_inline_alt=false;
  }

}
