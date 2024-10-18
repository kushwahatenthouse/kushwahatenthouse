import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-expanded-subheader',
  templateUrl: './expanded-subheader.component.html',
  styleUrls: ['./expanded-subheader.component.css']
})
export class ExpandedSubheaderComponent implements OnInit,OnChanges {

  @Input('data') data:any=[];
  @Input() currentPage:string='';

  constructor() { }

  ngOnInit(): void {
    let pthn = window.location.pathname.split('/')[1];
    if(pthn.length>1){
      this.selectedVal([],'/'+pthn);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'currentPage':
          this.currentPage = changes[key].currentValue;
          let pthn = window.location.pathname.split('/')[1];
          this.selectedVal([],'/'+pthn);
        break;
      }
    }
  }

  submenuOver(hnd:any){
    //console.log(hnd.target.children[0])
  }

  selectedVal(hnd:any,path:string=''){
    this.data.forEach((el:any)=>{
      el.selected = path==''?false:(el.url==path?true:false);
    })
    if(path=='')
      hnd.selected = true;
  }

}
