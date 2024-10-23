import { Component, Input, OnInit } from '@angular/core';
import { ImpFunctionService } from '../imp_function/imp-function.service';

@Component({
  selector: 'apx-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  constructor(private imp_func:ImpFunctionService) { }

  @Input('data') data:any=[
    {
      'name':'Rajesh Kumar',
      'rating':'4.3',
      'date':6767574633,
      'comment':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake',
      'comment_id':'xyz1',
      'reply':1
    },
    {
      'name':'Rajesh Kumar 2',
      'date':6767574633,
      'comment':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake',
      'comment_id':'xyz2',
      'reply':21
    },
    {
      'name':'Rajesh Kumar 3',
      'rating':'4.3',
      'date':6767574633,
      'comment':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake',
      'comment_id':'xyz3',
      'reply':211
    },
    {
      'name':'Rajesh Kumar 3',
      'rating':'4.3',
      'date':6767574633,
      'comment':'dfdfd',
      'comment_id':'xyz4',
      'reply':0
    },
  ]

  ngOnInit(): void {

  }


  more_avai(id:string):boolean{

    let el = document.getElementById(id) as HTMLElement;
    if(el.scrollHeight > el.clientHeight){
      return true;
    }else{
      return false;
    }

  }

  full_cmt(id:string){
    let el = document.getElementById(id) as HTMLElement;
    el.classList.toggle('text-line3');
  }

}
