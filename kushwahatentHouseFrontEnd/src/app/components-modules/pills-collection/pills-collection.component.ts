import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImpFunctionService } from '../imp_function/imp-function.service';

@Component({
  selector: 'apx-pills-collection',
  templateUrl: './pills-collection.component.html',
  styleUrls: ['./pills-collection.component.css']
})
export class PillsCollectionComponent implements OnInit {

  @Input() data:any=[
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
    }
  ]

  @Input() multiSelection:boolean=false;
  @Input() background:string='#ffffff'
  @Input() alwaysOne:boolean = false;
  @Output() clicked:EventEmitter<any> = new EventEmitter();


  isMobile:boolean = false;
  constructor(private impfnc:ImpFunctionService) { }

  ngOnInit(): void {
    this.isMobile = this.impfnc.is_mobile();
  }

  pillsclicked(val:any,hnd:any){
    this.data.forEach((el:any) => {
      el.selected = this.multiSelection?el.selected:false;
    });
    hnd.selected=!hnd.selected;

    this.clicked.emit({'clicked':val,'data':hnd})
  }

}
