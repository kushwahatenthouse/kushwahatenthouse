import { Component, OnInit } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { ShareServiceService } from './share-service.service';

@Component({
  selector: 'apx-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  private ngNavigatorShareService: NgNavigatorShareService;
  shareST:boolean = false;
  constructor(
    ngNavigatorShareService: NgNavigatorShareService,
    private subShare:ShareServiceService
  ) {
    this.ngNavigatorShareService = ngNavigatorShareService;
  }

  title:string='';
  url:string='';
  content:string='';
  isOpened:boolean = false;
  copied:boolean = false;

  ngOnInit(): void {
    this.subShare.subject.subscribe(
      (data:any)=>{
        this.title = data.title;
        this.url = data.url;
        this.content = data.desc;
        this.isOpened = false;
        this.share();
      }
    )
  }

  share() {
    this.copied = false;
    this.isOpened = this.ngNavigatorShareService.webNavigator!==null ? false : true;
    // if (!this.ngNavigatorShareService.canShare()) {
    //   return;
    // }
    console.log(this.ngNavigatorShareService.webNavigator)
    this.ngNavigatorShareService.share({
      title: this.title,
      text: this.content,
      url: this.url
    }).then( (response) => {
      this.isOpened = true;
    })
    .catch( (error) => {
      if(!this.isOpened)
        this.shareST = true;
      console.log(error);
    })
    
  }

  copytoClip(){
    document.addEventListener('copy',(e:ClipboardEvent)=>{
      let clipbrd:any = e.clipboardData || window['Clipboard'];
      clipbrd.setData("text",this.url);
      e.preventDefault();
      document.removeEventListener('copy',clipbrd,false);
      this.copied = true;
    })
    document.execCommand('copy')
  }

  shareonSM(str:string){
    window.open(str,'_blank');
  }

}
