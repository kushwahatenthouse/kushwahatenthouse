import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation,OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'apx-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class TreeListComponent implements OnInit {

  @Input('tree_data') treedata:tdata[] = [];
  @Input('child_lp') child_lp:number=12;
  @Input('one_line_format') olf:boolean = false;
  @Input('font_size') font_size:string='16px';

  @Output() clicked:EventEmitter<any> = new EventEmitter;


  public formated_data:any=[];
  public isExpand:boolean = false;
  public pathText:string='';

  htmltreeData:any='';

  placeholder:any = `<section>
                      <li class="tree-l-ph" style="padding:12px;max-height: 32px;overflow: hidden;">
                          <span style="max-height: 12px;" class="tree-ch-cls tree-ch-cls-ph" path-link="undefined"></span>
                      </li>
                      <li class="" style="padding:12px;max-height: 32px;overflow: hidden;">
                          <span style="max-height: 12px" class="tree-ch-cls tree-ch-cls-ph" path-link="undefined"></span>
                      </li>
                      <li class="" style="padding:12px;max-height: 32px;overflow: hidden;">
                          <span style="max-height: 12px;" class="tree-ch-cls tree-ch-cls-ph" path-link="undefined"></span>
                      </li>
                      <li class="" style="padding:12px;max-height: 32px;overflow: hidden;">
                          <span style="max-height: 12px;" class="tree-ch-cls tree-ch-cls-ph" path-link="undefined"></span>
                      </li>
                    </section>`;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:any){
    for(let key in changes){
      switch(key){
        case 'treedata':
          this.treedata = changes[key]['currentValue'];
          if(this.treedata.length==0 && this.treeDiv){
            this.treeDiv.nativeElement.innerHTML = this.placeholder;
          }
          this.processData();
      }
    }
  }

  processData(){
    if (typeof window == 'undefined') 
      return;
    this.format_data(this.treedata);
    this.pathText = window.location.pathname;
    //this.clicked.emit({url:this.pathText});

    this.htmltreeData = this.createHTML(this.treedata);
    if(this.treeDiv && this.htmltreeData.length > 20){
      this.treeDiv.nativeElement.innerHTML = this.htmltreeData;
    }
      
  }

  @ViewChild('treeDiagram',{static:false}) treeDiv!:ElementRef;
  ngAfterViewInit(){
    this.treeDiv.nativeElement.innerHTML = this.placeholder;
    //console.log(this.htmltreeData,this.htmltreeData.length)
    if(this.htmltreeData.length > 20)
      this.treeDiv.nativeElement.innerHTML = this.htmltreeData;
  }

  format_data(val:any,index:any=0,isexp?:boolean,sh?:boolean){
    val.forEach((el:any,i:number) => {
      let ch = el.child;
      let ell:any = {};
      for(let key in el){
        ell[key] = el[key];
      }
      ell.child = ch?true:false;
      let iid = index==0?0+'-'+i:index+'-'+i;
      ell.id = iid.substring(2);
      ell.expanded = (ell.child && isexp==undefined)?(el.expanded?el.expanded:false):(el.child==false?false:(isexp && el.child && el.expanded?true:false));
      ell.show = sh==undefined?true:(sh);
      this.formated_data.push(ell);
      if(el.child){
        this.format_data(ch,iid,ell.expanded,ell.expanded);
      }
    });
  }

  padding_left(id:string):string{
    let num = (id.length - id.replace(/-/g,'').length + 1)*this.child_lp;
    return num+'px';
  }
  expand_tree(val:any){
    if(!val.child){
      //window.open(val.url,'_self')
    }else{
      this.formated_data.forEach((el:any)=>{
        if(!val.expanded)
          el.show = (el.id.indexOf(val.id)==0 && el.id.length > val.id.length && el.id.substring(val.id.length+1).indexOf('-')==-1) ? !el.show:el.show;
        else{
          el.show = (el.id.indexOf(val.id)==0 && el.id.length > val.id.length) ? false:el.show;
          if(el.show==false){
            el.expanded = false;
          }
        }
      })
      if(val.child)
        val.expanded = !val.expanded;
    }
    
  }

  open_page(val:any){
    let trgele = val.target;
    let url = trgele.getAttribute('path-link');
    if(url !='undefined' && url!=''){
      let clel = val.target.parentElement.parentElement.children;//document.getElementsByClassName('tree-ch-cls') as HTMLCollection;
      for(let i=0;i<clel.length;i++){
        clel[i].children[0].classList.remove('selectedText');
      }
      trgele.classList.add('selectedText');
      this.router.navigate([url],{relativeTo:this.activatedRoute})
    }

    this.clicked.emit({url:url});
      
  }

  createHTML(data:any):any{
    let ht:any = '';
    data.forEach((el:any)=>{
      if(el.child && el.child.length > 0){
        ht+='<li><span class="parentSpanLi '+(el.expanded?'apx-tree-selected':'')+'" path-link="'+el.url+'" onClick="this.nextElementSibling.classList.toggle(\'show_child\');this.classList.toggle(\'apx-tree-selected\');this.lastElementChild.classList.toggle(\'apx-chevron-90\')"><i class="'+(el.icon?'fa fa-home apx-tree-icon':'')+'"></i>'+el.text+'<i class="fa fa-chevron-right apx-chevron '+(el.expanded?'apx-chevron-90':'')+'"></i></span><section class="hide_child '+((el.expanded && el.expanded) ? 'show_child':'')+'">'+this.createHTML(el.child)+'</section></li>';
      }else if(el.text!=''){
        ht+='<li><span class="'+(el.selected?'selectedText':'')+' tree-ch-cls" path-link="'+el.url+'">'+el.text+'</span></li>';
      }
    })
    return ht;
  }

  treeClick(val:any){
    val.srcElement.nextElementSibling.classList.toggle('show_child');
    val.srcElement.children[0].classList.toggle('apx-chevron-90');
  }

}

interface tdata{
  text:string,
  url?:string,
  selected?:boolean,
  expanded?:boolean,
  icon:string,
  child:tdata[]
}