import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-list-sample',
  templateUrl: './link-list-sample.component.html',
  styleUrls: ['./link-list-sample.component.css']
})
export class LinkListSampleComponent implements OnInit {

  data:any=[
    {
      'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.. solo gameplaatying',
      'type':'number',
      'num':0,
      'line_r':'two',
      'link_url':'/button-sample',
      'target':'_self',
      active_link:false
    },
    {
      'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'type':'number',
      'num':10999,
      'line_r':'one',
      'link_url':'/button-sample',
      'target':'_self'
    },
    {
      'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'type':'number',
      'num':11111110,
      'line_r':'one',
      'link_url':'/button-sample',
      'target':'_self'
    },
    {
      'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'type':'icon',
      'num':11111110,
      'line_restriction':'one',
      'link_url':'/button-sample',
      'target':'_self',
      'icon_type':'image'
    },
    {
      'text':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      'type':'icon',
      'num':11111110,
      'line_restriction':'one',
      'link_url':'/button-sample',
      'target':'_self',
      'icon_type':'icon',
    } 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
