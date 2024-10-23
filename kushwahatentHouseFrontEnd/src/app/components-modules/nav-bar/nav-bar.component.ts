import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'apx-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input('position') position:string = 'top';
  @Input('isNavIcon') isNavIcon:boolean = true;
  @Input() sticky_header:boolean=false;
  @Input() minWidth:string='50px';
  @Input() navShadow:boolean = false;
  @Input() navBorder:boolean = false;
  @Input() data:any=[
    {
      text:'Home',
      icon:'fa fa-home',
      img:'../../../assets/icon/home.png',
      selected:true,
      link:'/'
    },
    {
      text:'Theory',
      icon:'fa fa-file',
      img:'../../../assets/icon/notes.png',
      selected:false,
      link:'/theory'
    },
    {
      text:'Practice',
      icon:'fa fa-file',
      img:'../../../assets/icon/practice.png',
      selected:false,
      link:'/practice'
    },
    {
      text:'PYQ',
      icon:'fa fa-file',
      img:'../../../assets/icon/pyq.png',
      selected:false,
      link:'/pyq'
    },
    {
      text:'Questions',
      icon:'fa fa-file',
      img:'../../../assets/icon/questions.png',
      selected:false,
      link:'/questions'
    }
    
  ];

  navWidth:string='25vw';
  constructor() { }

  ngOnInit(): void {
    let n = this.data.length;
    let fn = Math.floor(100/n);
    this.navWidth = fn+'vw';
  }

  nav_clicked(v:any){
    this.data.forEach((el:any) => {
      el.selected = false;
    });
    v.selected=true;
    window.open(v.link,'_self')
  }

}
