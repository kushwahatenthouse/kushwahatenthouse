import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singledropdown-sample',
  templateUrl: './singledropdown-sample.component.html',
  styleUrls: ['./singledropdown-sample.component.css']
})
export class SingledropdownSampleComponent implements OnInit {


  data:any=[
    {valueText:'rajesh'},
    {valueText:'kumar'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
