import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';

interface storyConfig{
  storyId:string,
  storyName:string,
  fullName?:string,
  thumbnail:string,
  seen?:boolean,
  storyData:any
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @HostListener('window:hashchange', ['$event'])
  hashChanged(event:HashChangeEvent){
    if(event.oldURL.indexOf('storyMode') > -1 && event.newURL.indexOf('storyMode') <0){
      this.showStory = false;
    }
  }

  @ViewChild('slickModal',{static:false}) slick:any;

  @Input() storyData:storyConfig[] = [
    {
      storyId:'ad161',
      storyName:'Current Affair',
      thumbnail:'https://cossquare-images.cossquare.com/logo1.png', // can add here profile ID can do can do more staff
      storyData:[
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/theory.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/practice.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/asb.png'
        }
      ]
    },
    {
      storyId:'ad11',
      storyName:'Current Affair',
      thumbnail:'https://cossquare-images.cossquare.com/logo1.png', // can add here profile ID can do can do more staff
      storyData:[
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/theory.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/practice.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/asb.png'
        }
      ]
    },
    {
      storyId:'ad12',
      storyName:'Current Affair',
      thumbnail:'https://cossquare-images.cossquare.com/logo1.png', // can add here profile ID can do can do more staff
      storyData:[
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/theory.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/practice.png'
        },
        {
          dataType:'image',//image/video/blog
          path:'https://cossquare-images.cossquare.com/asb.png'
        }
      ]
    }
  ]

  /* variables */
  isMobile:boolean = false;
  storyDataA:storyConfig[]=[];
  showStory:boolean = false;
  storyNo:number = -1;

  progressBwidth:string='';
  stories:any = [];
  profileDetiails:any={};

  /* time handler */
  setTimeouthld:any;
  timeleft:number = 5500;
  progressBarStTime:number=0;
  pauseProgressBar:boolean = false;
  cancelResume:boolean = false;

  /* ngx slider config */
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  constructor() { 
    this.isMobile = this.is_mobile()
  }

  ngOnInit(): void {

    // get seend story id array
    let tmpA = this.getLocalStorage();
    this.storyDataA = this.storyData.map((el:storyConfig)=>{
      if(el.storyName.length > 12){
        el.fullName = el.storyName;
        el.storyName = el.storyName.substring(0,9)+'...';
        el.seen = tmpA.indexOf(el.storyId) > -1 ? true :false;
      }
      return el;
    })
    this.storyDataA = this.sortByActive(this.storyDataA)
    
  }

  ngAfterViewInit(){
    // this.showStoryF(this.storyDataA[0])
  }

  showStoryF(data:storyConfig){
    this.profileDetiails.name = data.fullName;
    this.profileDetiails.thumbnail = data.thumbnail;
    data.seen = true;
    this.showStory = true;

    // add hash
    window.location.hash='storyMode';
    
    // setting localStorage
    this.setLocalStorage(data.storyId)

    this.stories = data.storyData.map((el:any,i:number)=>{
      el.fileLoaded = false;
      el.seen = false;
      el.preFload = i===0?true:false;
      return el;
    });
    this.progressBwidth = (100 / data.storyData.length)+'%'; 
    this.storyDataA = this.sortByActive(this.storyDataA)
  }

  closeStory(){
    this.showStory = false;
    clearTimeout(this.setTimeouthld);
    window.location.hash = '';
  }



  // fire fnc when file completely loaded
  imageLoaded(i:number){
    this.stories = this.stories.map((el:any,j:number)=>{
      if(i===j){
        el.fileLoaded = true;

        if(i===0)
          this.startProgressBar(this.timeleft,i)


      }else if((i+1)===j){
        el.preFload = true;  // if previous file load complete then download next file
      }
      return el;
    })
  }

  // start progress bar
  startProgressBar(timeleft:number=5500,i:number=this.storyNo){
    // now start progress
    this.storyNo = i;
    this.progressBarStTime = new Date().getTime();
    this.pauseProgressBar = false;
    this.setTimeouthld = setTimeout(()=>{
      this.stories[this.storyNo].seen = true;
      // after settimeout start next bar progress
      // check if next file loaded
      if(this.stories.length>i+1 && this.stories[this.storyNo+1].fileLoaded){
        this.storyNo++;
        this.slick.slickGoTo(this.storyNo);
        this.timeleft = 5500;
        clearTimeout(this.setTimeouthld);
        this.startProgressBar(this.timeleft,this.storyNo);
      }else{
        this.closeStory();
      }

    },timeleft)
  }
  stopProgressBar(){
    this.pauseProgressBar = true;
    clearTimeout(this.setTimeouthld);
    this.timeleft = this.timeleft - (new Date().getTime() - this.progressBarStTime); // time left of progress bar
  }

  resumeProgressBar(){
    setTimeout(()=>{
      if(!this.cancelResume && this.pauseProgressBar)
        this.startProgressBar(this.timeleft);
    },600)
  }
  



  /* ngx evnet */
  afterChange(e:any){
    if(this.pauseProgressBar){
      this.stories = this.stories.map((el:any,i:number)=>{
        if(i < e.currentSlide){
          el.seen = true;
        }else{
          el.seen = false;
        }
        return el;
      })
      this.timeleft = this.storyNo!==e.currentSlide ? 5500 : this.timeleft;
      this.startProgressBar(this.timeleft,e.currentSlide)
      this.cancelResume = false;
    }
    // this.stories=this.stories.map((el:any)=>{
    // });
    // this.startProgressBar(5500,e.currentSlide-1);
  }
  beforeChange(e:any){
    this.cancelResume = true;
  }


  // make localStorage of seen Story
  /* 
    format of data stored

    [
      {
        date:'',
        data:''
      },...
    ]

  */
  setLocalStorage(id:string){

    // store id for one day only
    var storySeen = window.localStorage.getItem('seenStory');
    var seenStoryA = storySeen ? JSON.parse(storySeen) : [];

    // remove data which are older than a day
    seenStoryA = seenStoryA.filter((el:any)=>{
      if(el!=null && el.date + 24*60*60*1000 > new Date().getTime() && el.data!=id){
        return true;
      }else{
        return false;
      }
    })

    let tmp:any = {
      date:new Date().getTime(),
      data:id
    }

    seenStoryA.push(tmp);

    window.localStorage.setItem('seenStory',JSON.stringify(seenStoryA));

  }


  // fetch seen story from localStorage
  getLocalStorage():string[]{
    let seenData = window.localStorage.getItem('seenStory');
    let seenDataA = seenData ? JSON.parse(seenData) : [];

    let tmpA:string[] = [];

    tmpA = seenDataA.map((el:any)=> {
      if(el!=null)
        return el.data
    });
    return tmpA;

  }


  // if device is mobile
  is_mobile():boolean{
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
    return isMobile;
  }

  sortByActive(arr:any):any {
    arr.sort((a:any, b:any) => {
      // Sort objects with active: true first
      if (a.seen && !b.seen) {
        return 1;
      } else if (!a.seen && b.seen) {
        return -1;
      }
      // For objects with active: true or active: false, maintain the original order
      return 0;
    });
    return arr;
  }

}
