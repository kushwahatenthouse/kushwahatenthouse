import { Component, OnInit, EventEmitter, Output, ElementRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor(private el:ElementRef) { }

  @Input('width') width:string='limited';// limited/full
  @Input('toggle_option') toggle_option:any = ['First Options','Second Options','Second1 Options']
  @Input('selected') selected:string='First Options';
  @Input('disable') disable:boolean = false;
  @Input('size') size:string='small';
  @Input('background') background:string='#fff';

  public size_data:any={
    'default':{
      'font':'normal normal normal 16px opensans',
      'height':'40px',
      'padding':'7px 18px'
    },
    'small':{
      'font':'normal normal normal 12px opensans',
      'height':'32px',
      'padding':'6px 14px'
    },
    'full':{
      'width':'100%'
    },
    'limited':{
      'width':'none'
    }
  }

  @Output() clicked:EventEmitter<any>= new EventEmitter();

  ngOnInit(): void {

    this.width = this.width.toLowerCase();
    if(this.width=="full"){
      this.size_data['full']['width']=Math.floor(100/(this.toggle_option.length))+'%';
    }

    this.selected = this.selected==''?this.toggle_option[0]:this.selected;

  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'selected':
          // this.select_toggle(this.selected,this.toggle_option.indexOf(this.selected),false);
        break;
      }
    }
  }

  ngAfterViewInit(){
    this.select_toggle(this.selected,this.toggle_option.indexOf(this.selected),false);
  }

  rnd_nm:string=this.random_no();
  key_state:boolean=true;
  random_no(n:number=11):string{
    return 'abc';
  }

  rmv_all_slt(t:string='s'){ 
    var cl = this.el.nativeElement.getElementsByClassName('all_toggle');
    for(let i=0;i<cl.length;i++){
      if(t=='s')
        cl[i].classList.remove('selected','selected1','selected2');
      else
        cl[i].classList.remove('hovered','hovered1','hovered2','hovered3','hovered4');
    }
  }

  select_toggle(st:string,i:number,st1:boolean){
    if(st1)return;

    this.selected=st;
    this.clicked.emit(st);
    this.rmv_all_slt('h');this.rmv_all_slt('s');
    if(i==0){
      let cn = this.rnd_nm+i;
      let a1 = this.el.nativeElement.getElementsByClassName(cn)[0];
      a1.classList.add('selected');
      a1.blur();
    }else{
      var cn1 = this.rnd_nm+i,cn2 = this.rnd_nm+(i-1);
      let a1 = this.el.nativeElement.getElementsByClassName(cn1)[0];
      let a2 = this.el.nativeElement.getElementsByClassName(cn2)[0];
      a1.classList.add('selected1');
      a2.classList.add('selected2');
    }
  }

  random_cl(i:number):string{
    let rd = 'abc';
    let rt = rd+i;
    return rt;
  }

  hover_on(lb:string,i:number){
    if(this.disable)return;
    this.key_state = false;
    let si = this.toggle_option.indexOf(this.selected);
    if(si==i)
      return;

    let cn = this.rnd_nm+i;
    let a1 = this.el.nativeElement.getElementsByClassName(cn)[0];
    if(Math.abs(i-si)>1){
      if(i==0)
        a1.classList.add('hovered');
      else{
        let cn2 = this.rnd_nm+(i-1);
        let a2 = this.el.nativeElement.getElementsByClassName(cn2)[0];
        a2.classList.add('hovered3');
        a1.classList.add('hovered1');
      }
    }else{
      if(i>si)
        a1.classList.add('hovered1');
      else{
        if(i>0){
          a1.classList.add('hovered2');
          let cn2 = this.rnd_nm+(i-1);
          let a2 = this.el.nativeElement.getElementsByClassName(cn2)[0];
          a2.classList.add('hovered3');
        }else
          a1.classList.add('hovered4');
      }

    }
  }

  hover_out(lb:string,i:number){
    if(this.disable)return;
    let cn = this.rnd_nm+i;
    let a1 = this.el.nativeElement.getElementsByClassName(cn)[0];
    a1.blur();
    this.key_state = true;
    this.rmv_all_slt('h')
  }


}
