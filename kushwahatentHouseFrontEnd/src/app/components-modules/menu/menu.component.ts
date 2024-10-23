import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'apx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('padding') padding:string='';
  @Input('background') background:string='';
  @Input('color') color:string='';
  @Input('left') left:boolean=true;
  @Input('menu_list') menu_list:any=[
    {
      'menu':'Home',
      'submenu':[
        {
          'text':'Link first',
          'icon':'fa fa-icon',
          'link':'/home'
        },
        {
          'text':'Link Second',
          'icon':'fa fa-icon',
          'link':'/home'
        },
        {
          'text':'Link Third',
          'icon':'fa fa-icon',
          'link':'/home'
        }
      ]

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
