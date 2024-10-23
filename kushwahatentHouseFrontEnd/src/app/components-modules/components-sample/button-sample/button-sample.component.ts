import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sample',
  templateUrl: './button-sample.component.html',
  styleUrls: ['./button-sample.component.css']
})
export class ButtonSampleComponent implements OnInit {

  constructor() { }

  showAlert:boolean = false;
  ngOnInit(): void {
  }

}
