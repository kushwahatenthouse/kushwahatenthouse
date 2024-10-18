import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[apxTooltip]'
})
export class TooltipDirective  implements OnDestroy{

  @Input() tooltip:string = ''; // The text for the tooltip to display
  @Input() delay:number = 19; // Optional delay input, in ms
  @Input() position:string='left';

  private myPopup:any;
  private timer:any;

  constructor(private el: ElementRef) { }

  ngOnDestroy(): void {
    if (this.myPopup) { this.myPopup.remove() }
  }

  @HostListener('mouseenter') onMouseEnter() {

    if(this.tooltip=='')return;

    this.timer = setTimeout(() => {
      let w = this.el.nativeElement.offsetWidth;let x=0,y=0;
      let h = this.el.nativeElement.offsetHeight;
      let x1 = this.el.nativeElement.getBoundingClientRect().left,x2 = this.el.nativeElement.getBoundingClientRect().right;
      let y1 = this.el.nativeElement.getBoundingClientRect().top,y2 = this.el.nativeElement.getBoundingClientRect().bottom;
      switch(this.position){
        case 'top':
          y = y1 - h - 18;
          x = x1 ;
          break;
        case 'left':
          y = y1 + h/2;
          x = x1 ;
          break;
        case 'right':
          y = y1 -6;
          x = x1 + w + 10;
          break;
        case 'bottom':
          y = y2 +10;
          x = x1;
          break;
      }
      //x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth/ 2; // Get the middle of the element
      //y = this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight + 6; // Get the bottom of the element, plus a little extra
      this.createTooltipPopup(x, y);
    }, this.delay)
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(this.tooltip=='')return;
    if (this.timer) clearTimeout(this.timer);
    if (this.myPopup) { this.myPopup.remove() }
  }

  private createTooltipPopup(x: number, y: number) {
    let popup = document.createElement('div');
    popup.innerHTML = this.tooltip;
    popup.setAttribute("class", "tooltip-container");
    popup.style.top = y.toString() + "px";
    popup.style.left = x.toString() + "px";
    document.body.appendChild(popup);
    this.myPopup = popup;
    setTimeout(() => {
      if (this.myPopup) this.myPopup.remove();
    }, 10000); // Remove tooltip after 5 seconds
  }

}
