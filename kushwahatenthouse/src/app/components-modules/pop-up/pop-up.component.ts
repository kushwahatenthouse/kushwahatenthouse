import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  private _show_popup:boolean =false;
  get show_popup(): boolean {
    return this._show_popup;
  }
  @Input()
  set show_popup(val: boolean) {
    this._show_popup = val;
    if(this._show_popup){
      setTimeout(()=>{
        this.open_popup();
      },1000)
      
    }else{
      this.close_popup('');
    }
  }

  @Input('width') width:string='330px';
  @Input('type') type:string='subscribe';

  
  ngOnInit(): void {

  }

  popup:any;btn:any;span:any;
  ngAfterViewInit(){
    this.popup = document.getElementById('popup-wrapper') as HTMLElement;
    this.btn = document.getElementById("popup-btn") as HTMLElement;
    this.span = document.getElementById("close") as HTMLElement;
  }

  open_popup(){
    this.popup.classList.add('show');
  }
  
  close_popup(event:any){
    if (event.target == this.popup || event=='') {
      this.popup.classList.remove('show');
    }
  
  }
}
