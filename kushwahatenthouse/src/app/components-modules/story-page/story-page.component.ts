import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ImpFunctionService } from '../imp_function/imp-function.service';
import { Router } from '@angular/router';
import { data } from '../story-page/story-data-format';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.css']
})
export class StoryPageComponent implements OnInit {

  constructor(private imp_func:ImpFunctionService, private router:Router) { }


  ismobile:boolean=false;
  story_data:any = data;
  story_view:boolean=false;

  ngOnInit(): void {
    this.ismobile = this.imp_func.is_mobile();
    //this.story_track();
    console.log(data);

    localStorage.setItem('story-data',JSON.stringify(data));

  }


  story_clicked(story_id:string,user_hash:string){
    this.router.navigate(['/user-story',story_id]);
  }



}  
