import { Component, OnInit,Input, Output } from '@angular/core';

@Component({
  selector: 'apx-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  search_text:string='';
  @Input('search_hint') search_hint:any=[];
  search_hint_ref:any = [
    {
      'text':'Demo text',
      'link':'/abc',
      'icon':'../../assets/search.png'
    },
    {
      'text':'Demo text1',
      'link':'/abd',
      'icon':'../../assets/search.png'
    },
    {
      'text':'Demo text2',
      'link':'/abd'
    }
  ];


  ngOnInit(): void {
  }

  searching_start:boolean=false;
  search_start(txt:any){
    if(txt.length>2){
      this.searching_start=true;
      setTimeout(() => {
        this.search_hint = this.search_hint_ref;
      }, 2);
    }else
      this.searching_start=false;
  }

  open_link(link:string){
    window.open(link,'_self')
  }

}
