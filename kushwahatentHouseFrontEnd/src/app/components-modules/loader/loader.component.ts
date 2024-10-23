import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() fullScreen:boolean = false;
  @Input() loadingText:string='Loading...';
  constructor() { }

  ngOnInit(): void {
  }

}
