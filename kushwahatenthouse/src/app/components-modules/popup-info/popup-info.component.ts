import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.css']
})
export class PopupInfoComponent implements OnInit {

  @Input() title:string ='Information';
  @Input() content:string= '<b>Lorem</b> <a href="/">ipsum dolor</a> sit amet. Non consequatur doloribus qui dolor inventore et autem error natus quae. Ut debitis dolorum aut quisquam dolor aut molestias enim id similique nesciunt aut nostrum placeat.';

  showPopup:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showPopupfn(){
    this.showPopup = true;
  }

}
