import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'apx-in-viewport-popup',
  templateUrl: './in-viewport-popup.component.html',
  styleUrls: ['./in-viewport-popup.component.css']
})
export class InViewportPopupComponent implements OnInit {

  @Input() data:string[]=[];
  classNamea:string[] = [];
  showAnime:boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.classNamea = this.data.map(i=>'active'+i);
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.showAnime = visible ? true : this.showAnime;
    // let id = target.getAttribute('data-id');
    // let clName = 'active'+id;
    // this.renderer.removeClass(target, visible ? 'inactive' : clName);
    // this.renderer.addClass(target, visible ? clName : 'inactive');
  }

}
