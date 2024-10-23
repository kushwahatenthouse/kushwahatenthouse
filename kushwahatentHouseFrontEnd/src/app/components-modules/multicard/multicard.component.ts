import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-multicard',
  templateUrl: './multicard.component.html',
  styleUrls: ['./multicard.component.css']
})
export class MulticardComponent implements OnInit {

  @Input() data:any=[];
  @Input() maxSize:string='1000px';

  constructor() { }

  ngOnInit(): void {
  }

}
