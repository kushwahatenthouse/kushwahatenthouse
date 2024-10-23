import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastSubject = new Subject<any>();

  constructor() { }

  /*
    data : text to be appeared in toast
    defaultClose : if defaultClosable
    timeer : in sec it will be closed automatically
  */
  toastData(data:string,defaultClosable:boolean,timeInSec:number){
    this.toastSubject.next({data:data,defaultClosable:defaultClosable,time:timeInSec})
  }

}
