import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apx-scroll-banner',
  templateUrl: './scroll-banner.component.html',
  styleUrls: ['./scroll-banner.component.css']
})
export class ScrollBannerComponent implements OnInit {

  constructor() { }

  @Input('image') images:any = [
    {path: '../../assets/book.jpg'},
    {path: '../../assets/nature.jpg'},
    {path: '../../assets/book.jpg'},
    {path: '../../assets/nature.jpg'},
  ]
  
  @Input("objectFit") objectFit:string='cover';
  @Input("arrows") arrows:boolean=true;
  @Input("dots") dots:boolean=true;
  @Input("loop") loop:boolean=true;
  @Input("arrowsTheme") arrowsTheme:string='dark';
  @Input("arrowsOutside") arrowsOutside:boolean=true;
  @Input("autoplay") autoplay:boolean=true;
  @Input("autoplay_time") autoplay_time:number=3000;
  @Input("pauseOnHover") pauseOnHover:boolean=true;
  @Input("transition_time") transition_time:number=3000;
  @Input("aspect_ration") aspect_ratio:number=0.4;

  height:number=0;
  get setheight():number{
    return this.height;
  }
  @Input("height") set setheight(height:number){
    this.height = height;
    /// add new function here
  }


  ngOnInit(): void {
    this.height = window.innerWidth*this.aspect_ratio;
  }

}

