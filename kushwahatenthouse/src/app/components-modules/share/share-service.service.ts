import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  public subject = new Subject();

  constructor() { }

  showShare(title:string,url:string,desc:string=''){
    this.subject.next({title:title,url:url,desc:desc});
  }
  
}
