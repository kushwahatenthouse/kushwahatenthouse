import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() type:string='new-emphasized';//primary,emphasized,new-emphasized
  @Input() totalQCount:number = 0;
  @Input() perPage:number = 15;
  @Input() currentPage:number = 1;
  @Input() pageLimit:any = [{page:15,selected:true},{page:30,selected:false},{page:50,selected:false}]

  pagingSet:any = [];// [{page:1,selected:false},{page:2,selected:true}]
  totalPage:number = 0;

  @Output() pageEvent:EventEmitter<number> = new EventEmitter();
  @Output() countPerPageEvent:EventEmitter<number> =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.calcPageSet();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'totalQCount':
          this.totalQCount = changes[key].currentValue;
          this.calcPageSet();
        break;
        case 'perPage':
          this.perPage = parseInt(changes[key].currentValue);
          this.pageLimit.forEach((el:any)=>{
            if(el.page===this.perPage)
              el.selected = true;
            else
              el.selected = false;
          })
        break;
      }
    }
  }

  calcPageSet(){
    this.pagingSet = [];
    // things to be done
    // 1. calculate total number of pages first

    this.totalPage = Math.ceil(this.totalQCount/this.perPage);

    // 2. per page we are showing max 7 count
    // if totalPage is <=7 then no hard calculation
    // else if totalPage > 7
    if(this.totalPage > 7){
      // all calculation will start here like where to show all things
      // if currentPage is within 4 then
      if(this.currentPage <=4){
        let dict:any = {}
        for(let i=0;i<5;i++){
          dict = {page:(i+1)}
          dict['selected'] = (i+1)==this.currentPage ? true:false;
          this.pagingSet.push(dict);
        }
        dict = [{page:'...',gap:true},{page:this.totalPage,selected:false},{page:this.currentPage+1,selected:false,next:true}]
        this.pagingSet = [...this.pagingSet,...dict]
      }else if(this.currentPage+4>=this.totalPage){// else last 4
        let dict:any = [{page:this.currentPage-1,selected:false,previous:true},{page:1,selected:false},{page:'...',gap:true}]
        this.pagingSet = [...this.pagingSet,...dict]
        for(let i=this.totalPage-5;i<this.totalPage;i++){
          dict = {page:(i+1)}
          dict['selected'] = (i+1)==this.currentPage ? true:false;
          this.pagingSet.push(dict);
        }
      }else{ // anywhere in the middle

        let dict:any = [{page:this.currentPage-1,selected:false,previous:true},{page:1,selected:false},{page:'...',gap:true}]
        this.pagingSet = [...this.pagingSet,...dict]

        for(let i=this.currentPage-3;i<this.currentPage+2;i++){
          let dict:any = {page:(i+1)}
          dict['selected'] = (i+1)==this.currentPage ? true:false;
          this.pagingSet.push(dict);
        }

        dict = [{page:'...',gap:true},{page:this.totalPage,selected:false},{page:this.currentPage+1,selected:false,next:true}]
        this.pagingSet = [...this.pagingSet,...dict]
      }
    }else{
      for(let i=0;i<this.totalPage;i++){
        let dict:any = {page:(i+1)}
        dict['selected'] = (i+1)==this.currentPage ? true:false;
        this.pagingSet.push(dict);
      }
    }

  }

  changePageLimit(num:number){
    if(this.perPage!=num){
      this.perPage = num;
      this.pageLimit.forEach((el:any)=>{
        if(el.page==num){
          el.selected = true;
        }else{
          el.selected = false;
        }
      })
      this.calcPageSet();
      this.countPerPageEvent.emit(num);
    }
  }

  changePageTo(num:any){
    if(typeof num=='number' && this.currentPage!=num){
      this.currentPage = num;
      this.calcPageSet();
      this.pageEvent.emit(num);
    }
  }

  goToPage(val:any){
    console.log(val)
  }

}
