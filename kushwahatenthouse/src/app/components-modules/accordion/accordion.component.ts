import { Component, Input, OnInit,OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'apx-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit,OnChanges {

  @Input() data:any=[
    {
      title:'Header 1',
      content:'content',
      expanded:true
    },
    {
      title:'Header 2',
      content:'content',
      expanded:false
    },
    {
      title:'Header 3',
      content:'content',
      expanded:false
    },
    {
      title:'Header 4',
      content:'content',
      expanded:false
    }
  ];

  @Input() multiSectional:boolean = false;

  @Output() clicked:EventEmitter<any> = new EventEmitter<any>();


  text:number=1;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(val:unknown){
    
  }

  expandSection(hnd:any){
    if(!this.multiSectional){
      this.data.forEach((el:any) => {
        if(hnd.title!=el.title){
          el.expanded = false;
        }
      });
    }
    hnd.expanded = !hnd.expanded;
    this.clicked.emit({title:hnd.title,status:hnd.expanded});
  }

}
