import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TagsComponent implements OnInit {

  @Input() data:any=[
    {
      text:'HTML',
      url:'http://localhost:4200'
    },
    {
      text:'CSS'
    },
    {
      text:'Angular'
    }
  ];
  @Input() openUrl:boolean = false;

  @Output() clicked:EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  clickValue(val:any){
    if(this.openUrl && val.url){
      window.open(val.url,'_self')
    }else{
      this.clicked.emit(val);
    }
  }

}
