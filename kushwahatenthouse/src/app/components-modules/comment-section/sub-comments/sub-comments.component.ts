import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpFunctionService } from '../../imp_function/imp-function.service';


@Component({
  selector: 'app-sub-comments',
  templateUrl: './sub-comments.component.html',
  styleUrls: ['./sub-comments.component.css']
})
export class SubCommentsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private imp_f:ImpFunctionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      console.log(id)
    })
    window.scrollTo(0,0);
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

  back_press(){
    this.imp_f.back_clicked();
  }

}
