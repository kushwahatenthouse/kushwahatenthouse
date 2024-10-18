import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInViewPort]'
})
export class InViewPortDirective {

  @Input() marginTop:number = 0;
  @Input() refId:number=-1;
  @Input() previousId:number = -1;
  @Input() disableViewPort:boolean = false;
  @Output() elementInView = new EventEmitter<any>();
  
  constructor(private el: ElementRef) { }

  lastScrollTop:number = -1;
  @HostListener('window:scroll',['$event'])
  windowScroll($event:any){
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > this.lastScrollTop && !this.disableViewPort) {
      this.trackViewPort(true);
    } else if (st < this.lastScrollTop && !this.disableViewPort) {
        this.trackViewPort(false);
    } // else was horizontal scroll
    this.lastScrollTop = st <= 0 ? 0 : st; 
  }

  options:any = {
    root: null,
    rootMargin: '0px',
    threshold: 0, // Set threshold to 0 or less
  };
  trackViewPort(downScroll:boolean) {
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          // Get the bounding client rect of the observed element
          const boundingClientRect = entry.target.getBoundingClientRect();
          console.log(this.refId,this.previousId,'popop',boundingClientRect)
          // Emit event when the top of the element touches the top of the viewport
          // here once condition can come when

          if(downScroll){
            if (this.refId > this.previousId && (boundingClientRect.top <= 160 && boundingClientRect.top > 40 || (boundingClientRect.top + boundingClientRect.height < window.innerHeight))) {
              console.log('hello',this.refId);
              this.previousId = this.refId;
              this.elementInView.emit({visible:true,target:this.refId,previousId:this.previousId});
            }
          }else{
            if (this.refId < this.previousId && (boundingClientRect.top >= 160 || (boundingClientRect.top >0 &&boundingClientRect.top + boundingClientRect.height < window.innerHeight))) {
              // alert(boundingClientRect.top+' '+boundingClientRect.height+' '+window.innerHeight)
              this.previousId = this.refId;
              this.elementInView.emit({visible:true,target:this.refId,previousId:this.previousId});
            }
          }

        } else {
          // this.elementInView.emit(false);
        }
      });
    },this.options);

    observer.observe(this.el.nativeElement);
  }

}
