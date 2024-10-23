import { Component, Input, OnInit } from '@angular/core';
import { ImpFunctionService } from '../../imp_function/imp-function.service';

@Component({
  selector: 'apx-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.css']
})
export class StaticBannerComponent implements OnInit {

  @Input() type:string='banner1';// banner1,banner2
  @Input() color:string='#000000';
  @Input() background:string='#ccc';
  @Input() data:any={
    title:'APX Developer',
    detail:'Try our responsive application development service at very affordable rate, Check our different verities',
    button_type:'emphasized',
    button_label:'Features We offer',
    button_link:'http://192.168.137.201:4200/button-sample'
  }
  @Input() height2:string='240px';
  @Input() width2:string='60%';

  isMobile:boolean =false;
  constructor(private impsrc:ImpFunctionService) { }

  height:string='';

  ngOnInit(): void {
    let h = window.innerWidth/4;
    this.height = h+'px';
    this.isMobile = this.impsrc.is_mobile();
    if(this.isMobile){
      this.width2 = '85%';
    }

  }

  btnclick(url:string){
    window.open(url,'_self');
  }

}
