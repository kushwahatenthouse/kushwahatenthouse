import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-path-link',
  templateUrl: './path-link.component.html',
  styleUrls: ['./path-link.component.css']
})
export class PathLinkComponent implements OnInit {

  @Input() data:any=[
    {
      text:'Class IX',
      link:''
    },
    {
      text:'Jee',
      link:''
    },
    {
      text:'Math',
      link:''
    },
    {
      text:'Coordinates',
      link:''
    },
    {
      text:'Circle',
      link:''
    },
    {
      text:'Theory',
      link:'http://192.168.137.201:4200/button-sample'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void{
    let el=document.getElementById('apidfffw123') as HTMLDivElement;
    el.scrollIntoView(false)
  }

}
