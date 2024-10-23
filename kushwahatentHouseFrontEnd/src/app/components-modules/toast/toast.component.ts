import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'apx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  public showToast:boolean = false;
  public toastdata:string ='';

  constructor(private toastSrv:ToastService) {
    this.toastSrv.toastSubject.subscribe(
      (res:any)=>{
        this.showToast = true;
        this.toastdata = res.data;
        if(res.defaultClosable){
          setTimeout(()=>{
            this.showToast = false;
          },res.time*1000)
        }
      },
      (error:any)=>{
        console.log('error')
      }
    )
  }

  ngOnInit(): void {
  }

  closeIt(){
    this.showToast= false;
  }

}
