import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ImpFuncService } from 'src/app/util/imp-func.service';

@Component({
  selector: 'apx-practise-mcq',
  templateUrl: './practise-mcq.component.html',
  styleUrls: ['./practise-mcq.component.css']
})

export class PractiseMcqComponent implements OnInit {

  @Input() ansAvail:boolean = true;
  @Input() showSol:boolean = false;
  @Input() allowToAns:boolean = true;
  @Input() quesNo:number = 1;
  @Input() previousQNo:number = -1;
  @Input() disableViewPort:boolean = true;
  @Input() index:number=0;
  @Input() tags:any=[];
  @Input() sectionName:string='';
  @Input() ques_type:string='mcq';//mcq/mca/para/sub/state --- state and mcq will be same
  @Input() savedQ:boolean = false;
  @Input() lang:string='en';
  @Input() userId:string = '';
  @Input() data:any={
    'quesId':'1abc',
    'ques':'This will be the first question to appear here',
    'options':['<div>Option 1</div>','Option 2','Option 3'],
    ques_type:'mcq',
    c_num:'',
    i_num:'',
    index:'',
    para:'<div>All paragraphs things will come here to add on</div>',
    q_title:'This will question title',
    subject:'',
    'ans':[{
      'answer':'Option 2',
      'index':1
    },{
      'answer':'Option 3',
      'index':2
    }],
    'sol':'solution will appear here for this question',
    'hint':'if hint available the hint will be shown here',
    'ref':{
      'text':'Text to be appear before url for which reference is given for this question',
      'url':'https://google.com'
    }
  }

  @Output() ansSelected:EventEmitter<any> = new EventEmitter();
  @Output() viewInPort:EventEmitter<any> = new EventEmitter();
  @Output() shareQues:EventEmitter<any> = new EventEmitter();
  @Output() toggleSave:EventEmitter<toggleSave> = new EventEmitter();

  constructor(private impfnc:ImpFuncService) { }

  ngOnInit(): void {
    
  }

  // ngOnChanges(changes:any){
  //   for(let key in changes){
  //     switch(key){
  //       case 'data':
  //         this.data = changes[key].currentValue;
  //       break;
  //     }
  //   }
  // }

  showAns(hnd:any){

  }

  optClicked(curElRef:HTMLDivElement,parElRef:HTMLDivElement,anss:string,qt:string,i:number){

    if(!this.allowToAns)return;
    
    this.showSol = true;

    if(this.ansAvail && (qt=='mcq' || qt=='state' || qt=='para')){  // if ansAvail then only check ans type on current time
      let ansIndex = parseInt(this.data.ans[0].index);
      let ans:boolean = false;
      if(parElRef.children[ansIndex]){
        parElRef.children[ansIndex].classList.add('crhg');
        parElRef.children[ansIndex].classList.remove('apx-prc-brlw')
      }
      if(i==ansIndex && anss==this.data.ans[0].answer){
        ans = true;
      }else if(this.data.ans.length > 0){
        curElRef.classList.add('incrhg');
        curElRef.classList.remove('apx-prc-brlw')
        ans = false;
      }
      this.allowToAns = false;
    }else if(qt=='mca'){
      let cm:boolean =false;
      this.data.ans.forEach((el:any) => {
        if(el.index==i && el.answer==anss){
          curElRef.classList.add('crhg');
          curElRef.classList.remove('apx-prc-brlw')
          cm = true;
        }
      });
      if(!cm && this.data.ans.length){
        curElRef.classList.add('incrhg');
        curElRef.classList.remove('apx-prc-brlw')
      }
    }

    this.ansSelected.emit({'quesId':this.data.quesId,'ansIndex':i});
    
  }

  subAns:string='';ca:boolean = false;
  checkSubAns(ans:string){
    if(this.subAns==ans){
      this.ca = true;
    }else{
      this.ca = false;
    }
    this.showSol = true;
  }

  onIntersection(event:any){
    if(event.visible){
      this.viewInPort.emit(event)
    }
  }

  shareIt(data:any){
    console.log(data)
    // let title = this.impfnc.decrptDbData(data.exam_cat)+' | '+this.impfnc.decrptDbData(data.exam_for);
    // let url = window.location.origin+'/questions/'+data.exam_cat+'/'+data.searchBy;
    // this.shareQues.emit({title:title,url:url})
  }

  toggleSaveFunc(){
    if(!this.userId){
      alert('Login First');
      return;
    }
    let dict:toggleSave ={
      doSave: !this.savedQ,
      fieldName: this.data.exam_cat+'#'+this.data.exam_for+'#'+this.data.subject,
      qkey: this.data._id
    }
    this.savedQ = !this.savedQ;
    this.toggleSave.emit(dict);
  }

  changeLang(){
    this.lang = this.lang=='en'?'hn':'en';
  }

}
export interface toggleSave{
  doSave:boolean,
  fieldName:string,// field name ex, engineering#mechanical#fluid-mechanics
  qkey:string
}