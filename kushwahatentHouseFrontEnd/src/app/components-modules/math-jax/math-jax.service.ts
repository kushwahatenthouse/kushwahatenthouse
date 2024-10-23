import { Injectable } from '@angular/core';
import { Observable, Observer, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathJAXService {

  private readonly notifier: ReplaySubject<boolean>;

  constructor() {
    this.notifier = new ReplaySubject<boolean>();
    window.hubReady = this.notifier; // as said, bind to window object
  }

  ready(): Observable<boolean> {
    return this.notifier;
  }

  render(element: HTMLElement, math:any): void {
    if (element!=undefined) {
      // if (math.latex) {
        element.innerHTML = math;
      // }else{
      //   element.innerHTML = math.mathml;
      // }
    }
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]); // MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);by adding element at 3rd arg it makes typesetting slow
  }

}

declare global {
  interface Window {
    hubReady: Observer<boolean>;
  }
}

export interface MathContent {
  latex: string;
  mathml: string;
}