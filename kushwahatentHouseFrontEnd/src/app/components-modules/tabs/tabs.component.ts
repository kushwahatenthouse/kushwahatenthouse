import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ImpFunctionService } from '../imp_function/imp-function.service';

@Component({
  selector: 'apx-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() data:any = [
    {
      content:'{{i1}}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      show:true,
      title:'Header 1'
    },
    {
      content:'{{i2}}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      show:false,
      title:'Header 21'
    },
    {
      content:'{{i1}}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      show:false,
      title:'Header 31'
    }
  ];

  @Input() borderAround:boolean=false;

  @ViewChild('tabsheader') tabsheader!:ElementRef;
  @Output() clicked:EventEmitter<any> = new EventEmitter();

  isMobile:boolean = false;

  constructor(private cd: ChangeDetectorRef,private impfnc:ImpFunctionService) { }

  ngOnInit(): void {
    this.isMobile = this.impfnc.is_mobile();
  }

  maxHeight:string='';maxHeight1:string='';maxHeight2:string='';
  hndArray:any = [];
  ngAfterViewInit():void{

    let hh = this.tabsheader.nativeElement.clientHeight;
    let cl = document.getElementsByClassName('apx-tabs-mc') as HTMLCollection;
    let mh=0;
    for(let i=0;i<cl.length;i++){
      mh= cl[i].clientHeight > mh ? cl[i].clientHeight : mh;
    }
    this.maxHeight1 = (mh)+'px';this.maxHeight2 = (hh-2)+'px';
    this.maxHeight = (mh+hh)+'px';
    this.cd.detectChanges();

    let trueOne:number=0;
    for(let i =0;i<this.data.length;i++){
      let id = 'apx-tabs-id-'+i;
      this.hndArray[i] = document.getElementById(id) as HTMLDivElement;
      trueOne = this.data[i].show?i:trueOne;
    }
    this.scrolltoView(trueOne);
  }

  showTabs(val:any,i:number){
    this.data.forEach((el:any) => {
      el.show = false;
    });
    val.show = true;
    //this.scrolltoView(i);
    this.clicked.emit(val);

  }

  scrolltoView(i:number){
    this.hndArray[i].scrollIntoView(false);
  }

}
