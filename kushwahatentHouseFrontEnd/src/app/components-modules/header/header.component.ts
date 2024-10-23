import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input('nav_width') nav_width:string='0px';
  @Input('menu_list') menu_list:any=[
    {
      'name':'Home',
      'link':'/home'
    },
    {
      'name':'Gallery',
      'link':'/gallery'
    },
    {
      'name':'Recent',
      'link':'/recent'
    },
    {
      'name':'Popular',
      'link':'/popular'
    }
  ];

  ngOnInit(): void {
  }

  check_me(){
    console.log('dddpppp')
  }

  nav_toggle_came:boolean=false;
  nav_toggle(){
    this.nav_width = this.nav_width=='0px'?'280px':'0px';
    this.nav_toggle_came = this.nav_width=='280px'?true:false;
  }
  
  search_bar(){
    
  }

}
