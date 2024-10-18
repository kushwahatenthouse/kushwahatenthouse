import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImpFunctionService } from '../../imp_function/imp-function.service';

@Component({
  selector: 'app-user-story',
  templateUrl: './user-story.component.html',
  styleUrls: ['./user-story.component.css']
})
export class UserStoryComponent implements OnInit {

  constructor(private imp_func:ImpFunctionService,private route:ActivatedRoute) { }

  
  @Input('image') images:any = [
    { 
      path: '../../assets/book.jpg'
    },
    {
      path: '../../assets/nature.jpg'
    },
    {
      path: '../../assets/logo.png'
    },
    {
      path: '../../assets/sqaure.png'
    },
  ]


  @ViewChild('myCarousel', {static: false}) myCarousel:any;


  ismobile:boolean=false;
  story_data:any='';json_story_data:any;user_story_data:any;story_id:string='';

  s_u_hash:string='';s_u_name:string='';
  s_data:any=[];

  story_bar_width:number=0;sbw:string='';story_data_array:any = [];

  ngOnInit(): void {
    this.ismobile = this.imp_func.is_mobile();
    this.route.params.subscribe(params=>{
      this.story_id = params['id'];
    })
    this.story_data = localStorage.getItem('story-data');
    this.json_story_data = JSON.parse(this.story_data);
    this.json_story_data.forEach((el:any) => {
      if(el['story-id']==this.story_id && this.story_id!=''){
        
        this.s_data = el['story-data'];
        this.s_u_hash = el['user-hash'];
        this.s_u_name = el['user-name'];
        this.s_data.forEach((ele:any) => {
          this.story_data_array.push(ele['data-path']);
        });

        let tt = this.s_data.length>0?this.s_data.length:1;
        this.story_bar_width = Math.floor((98/tt)) - 1;
        this.sbw = this.story_bar_width+'%';

        //console.log(this.sbw);

      }
    });
    setTimeout(()=>{
      this.track_increment();
    },200)
    
  }


  track_increment(){

    // here two job will done,
    // 1. make all previous image track full, and all track after empty
    // 2. make current image track

    


    let cs = this.current_src_file();
    let ind = this.story_data_array.indexOf(cs);
    let cl = document.getElementsByClassName('progress-div') as HTMLCollection;


    for(let i=0;i<cl.length;i++){
      let hn = cl[i] as HTMLElement;
      if(i<ind)
        hn.style.width='100%';
      else if(i>ind)
        hn.style.width='0%';
    }


    let hnd = cl[ind] as HTMLElement;
    for(let i =0;i<100;i++){
      setTimeout(()=>{
        hnd.style.width = (i+1)*1+'%';
      },(i+1)*3.5);
    }
  }



  
  story_track(){
    // let cl = document.getElementsByClassName('progress-div') as HTMLCollection;
    // for(let i =0 ;i<cl.length;i++){
    //   setTimeout(()=>{
    //     this.increase_story_track(cl[i],i);
    //   },(i)*13000);  

    // }

  }

  increase_story_track(hnd:any,i:number){
    //hnd.style.width='50%';//alert(bool)
    this.increase_hnd(hnd,true,i);
    // for(let i =0;i<100;i++){
    //   setTimeout(()=>{
    //     hnd.style.width = (i+1)*1+'%';
    //     if(i==99){
    //       this.myCarousel.next();
    //     }
    //   },(i+1)*130);
    // }
  }

  hndr:any=[];hndr_i:number=0;
  increase_hnd(hnd:any,what:boolean,i:number){

    if(what){
      this.hndr[i] = setInterval(()=>{
        hnd.style.width = (this.hndr_i+1)*1+'%';
        if(this.hndr_i==99){
          //this.myCarousel.next();
          this.hndr_i=0;
          clearInterval(this.hndr[i]);
        }
        this.hndr_i++;
      },20)
    }else{
      clearInterval(this.hndr[i]);
      console.log(this.hndr[i])
    }      
      
  }



  handleCarouselEvents(event:any){
    //console.log(event);
  }

  key_press(event:any){
    this.increase_hnd('',false,this.story_data_array.indexOf(this.current_src_file()))
    console.log(this.story_data_array.indexOf(this.current_src_file()))
    // if(event.target.parentElement.nextElementSibling!=null){
    //   let nxtel = event.target.parentElement.nextElementSibling.children[0].src;
    //   console.log(nxtel)
    // }
    // if(event.target.parentElement.previousElementSibling!=null){
    //   let nxtel = event.target.parentElement.previousElementSibling.children[0].src;
    //   console.log(nxtel)
    // }
    //console.log(event.target.parentElement.parentElement.style.transform);
  }

  current_src_file():string{
    let ci = '', src_image = '' ;
      //let iv = event.target.parentElement.parentElement.style.transform;

      let cl = document.getElementsByClassName('ssdmp') as HTMLCollection;
      let elm = cl[0].parentElement as HTMLElement;
      let iv = elm.style.transform;
      iv = iv==''?'translateX(0px)':iv;
      let j =0,k=0;
      j = iv.indexOf('(');k = iv.indexOf(')');
      let cv = Math.abs(parseInt(iv.substring(j+1,k-2)));
      //let ttv = iv.substring(elm.,15);

      for(let i=0;i<cl.length;i++){
        let el = cl[i] as HTMLElement;
        let tv = el.style.transform;
        tv = tv==''?'translateX(0px)':tv;
        let j =0,k=0;
        j = tv.indexOf('(');k = tv.indexOf(')');
        if(Math.abs(parseInt(tv.substring(j+1,k-2)))==cv){
          let tmp = el.children[0].children[0] as HTMLImageElement;
          src_image=tmp.src;
        }
      }
    return src_image;
  }

  key_up(event:any){
    setTimeout(()=>{
      this.track_increment();
    },500)
      
  }

}
