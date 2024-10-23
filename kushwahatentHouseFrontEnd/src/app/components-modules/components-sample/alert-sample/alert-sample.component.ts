import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-sample',
  templateUrl: './alert-sample.component.html',
  styleUrls: ['./alert-sample.component.css']
})
export class AlertSampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAlert:boolean = false;
  show_alert(){
    this.showAlert = true;
  }

  alertclicked(st:string){
    if(st=='Close'){
      this.showAlert = false;
    }
  }

}
