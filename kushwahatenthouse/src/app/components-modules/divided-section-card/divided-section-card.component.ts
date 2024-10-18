import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-divided-section-card',
  templateUrl: './divided-section-card.component.html',
  styleUrls: ['./divided-section-card.component.css']
})
export class DividedSectionCardComponent implements OnInit {

  @Input('section_type') section_type:string='type2';

  // type1 input data
  @Input('heading') heading:string='Heading';
  @Input('card') card:boolean=true;
  @Input('data') data:any=[
    {
      'img':'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
      'link':'https://google.com'
    },
    {
      'img':'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
      'link':'https://google.com'
    },
    {
      'img':'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
      'link':'https://google.com'
    },
    {
      'img':'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
      'link':'https://google.com'
    }
  ]

  // type 2 input data 
  @Input('card') card_no:number=4;

  

  constructor() { }

  @Input('background') background:string='red';
  @Input('color') color:string='white';

  ngOnInit(): void {
  }

  open_link(link:string){
    window.open(link,'_self')
  }

}
