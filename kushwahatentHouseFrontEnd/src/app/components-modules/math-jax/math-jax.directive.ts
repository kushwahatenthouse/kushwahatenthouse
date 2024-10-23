import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { MathJAXService } from './math-jax.service';

@Directive({
  selector: '[MathJAX]'
})
export class MathJAXDirective {

  private alive$ = new Subject<boolean>();

  @Input() appMath: any = '';
  private readonly _el: HTMLElement;

  constructor(private service: MathJAXService,
              private el: ElementRef) {
    this._el = el.nativeElement as HTMLElement;
  }

  ngOnInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['appMath'] && changes['appMath'].currentValue){
      this.render();
    }
  }

  ngOnDestroy(): void {
    this.alive$.next(false);
    console.log('des')
  }

  render(){
    this.service
      .ready()
      .pipe(
        take(1),
        takeUntil(this.alive$)
      ).subscribe(() => {
        if(this.appMath!=''){
          this.service.render(this._el, this.appMath);
        }
    });
  }
}
