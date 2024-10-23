import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-alert-sample',
  templateUrl: './inline-alert-sample.component.html',
  styleUrls: ['./inline-alert-sample.component.css']
})
export class InlineAlertSampleComponent implements OnInit {

  data:any={
    'title':'title of inline alert',
    'icon':'fa fa-info-circle',
    'des':'inline alert description for this event and all details for this inline alert',
    'type':'message',
    'close':false
  }
  data1:any={
    'title':'title of inline alert',
    'icon':'fa fa-info-circle',
    'des':'inline alert description for this event and all details for this inline alert',
    'type':'info',
    'close':false
  }
  data2:any={
    'title':'title of inline alert',
    'icon':'fa fa-info-circle',
    'des':'inline alert description for this event and all details for this inline alert',
    'type':'alert',
    'close':false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
