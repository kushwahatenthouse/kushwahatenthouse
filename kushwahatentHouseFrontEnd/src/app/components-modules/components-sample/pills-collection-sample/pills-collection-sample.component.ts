import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pills-collection-sample',
  templateUrl: './pills-collection-sample.component.html',
  styleUrls: ['./pills-collection-sample.component.css']
})
export class PillsCollectionSampleComponent implements OnInit {


  data:any=[
    {
      text:'Math',
      selected:true,
      size:'M',
      icon_position:'left',
      icon:'fa fa-home'
    },
    {
      text:'Physics',
      size:'M',
      selected:false,
    },
    {
      text:'Chemistry',
      size:'M',
      selected:false,
    },
    {
      text:'Math1',
      selected:true,
      size:'M',
      icon_position:'left',
      icon:'fa fa-home',
      disabled:true
    },
    {
      text:'Physics1',
      size:'M',
      selected:false,
    },
    {
      text:'Chemistry1',
      selected:false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selected(val:any){
    console.log(val,'ye')
  }

}
