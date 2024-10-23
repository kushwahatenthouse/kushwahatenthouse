import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'apx-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent implements OnInit {

  /*
    limit 250, but check will be made on 350, if less than 350 then no read more, if yes than read more will limit till 250
  */

  @Input() data:any = '';

  @ViewChild('readMore',{static:false}) readMorediv:ElementRef<HTMLDivElement> | undefined

  readMoreR:boolean = false;
  lenExceed:boolean = false;
  shortData:any = '';

  constructor() { }

  ngOnInit(): void {
    this.lenExceed = this.data.length >= 1300 ? true : false;
    this.readMoreR = this.lenExceed;
    this.shortData = this.data.substr(0,1100);
  }

  showAllData(cond:boolean){
    this.readMoreR = cond;
    setTimeout(()=>{
      if(this.readMorediv && cond){
        // alert(this.readMorediv.nativeElement.offsetTop)
        this.readMorediv.nativeElement.scrollIntoView({behavior:'smooth'})
      }
    },200)
  }

}
