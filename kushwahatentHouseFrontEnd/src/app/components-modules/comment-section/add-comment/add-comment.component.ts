import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  star_clicked(id:any){
    let el = document.getElementById(id) as HTMLElement;
    let elc = document.getElementsByClassName('fa') as HTMLCollection;
    let lm = Number.parseInt(id.substr(1,1));

    if(el.classList.contains('fa-star-o')){
      for(let i=0;i<lm;i++){
        elc[i].classList.add('fa-star');
        elc[i].classList.remove('fa-star-o');
      }
    }else{
      if(lm+1<=5){
        if(elc[lm].classList.contains('fa-star')){
          for(let i = lm;i<5;i++){
            elc[i].classList.remove('fa-star');
            elc[i].classList.add('fa-star-o');
          }
        }
      }else{
        for(let i=0;i<5;i++){
          elc[i].classList.remove('fa-star');
          elc[i].classList.add('fa-star-o');
        }
      }
      
    }



    // for(let i=0;i<lm;i++){
    //   elc[i].classList.toggle('fa-star-o');
    //   elc[i].classList.toggle('fa-star');
    // }
  }

}
