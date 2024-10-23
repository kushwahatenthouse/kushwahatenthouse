
import { Component, Input, OnInit,ElementRef,ViewChild, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation,ChangeDetectorRef } from'@angular/core';
import { HostListener } from '@angular/core';
import { deepCopy } from '@angular-devkit/core/src/utils/object';

@Component({
  selector: 'apx-single-dropdown',
  templateUrl: './apx-single-dropdown.component.html',
  styleUrls: ['./apx-single-dropdown.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class ApxSingleDropdownComponent implements OnInit, OnChanges {

  @Input("valueText") valueText:string='valueText';
  @Input() value:any =[];
  @Input() data:any=[];
  @Input() default_value:any={'valueText':''};

  @Input("size") size:any='medium'; // according to given sizes data will be taken
  @Input("filter") filter:string = 'contains';//'contains'; //startswith endswith
  @Input("thumbnail_shape") thumbnail_shape='circle';//'circle'/'square'/'none'
  public filter_set:string='';
  public size_data_rs:any={};

  public size_data:any={
    'small':{
      'height':'32px',
      'padding':'6px 10px',
      'lb_padding':'6px 10px',
      'lb_top':'6px',
      'lb_left':'6px',
      'lb_font_size':'14px',
      'cross_padding':'1px 9px',
      'drop_height':'24px'
    },
      'medium':{
      'height':'40px',
      'padding':'11px 12px',
      'lb_top':'11px',
      'lb_left':'8px',
      'lb_padding':'11px 12px',
      'lb_font_size':'14px',
      'cross_padding':'5px 9px',
      'drop_height':'30px'
    },
      'large':{
      'height':'48px',
      'padding':'14px 14px',
      'lb_top':'14px',
      'lb_left':'12px',
      'lb_padding':'14px 14px',
      'lb_font_size':'14px',
      'cross_padding':'9px 9px',
      'drop_height':'40px'
    }
  }
  
  @Input() isLoading:boolean = false;
  @Input("placeholder") placeholder_value:string='Placeholder';
  @Input("label_position") label_position:string='';
  @Input("disabled") disabled:boolean=false;
  @Input("error") error:boolean=false;
  //label stylibng
  @Input("drop_down_width") drop_down_width:string='';
  @Input("width") st_width:string='100%';
  @Input() readonly:boolean = false;
  @Input() allowUnselect:boolean = true;
  @ViewChild('autocomplete1', { static: false })
  autoComplete1!: ElementRef;
  // passing value to parent
  @Output() value_changed: EventEmitter<any> = new EventEmitter();
  @Output() value_cleared: EventEmitter<any> = new EventEmitter();
  @Output() key_up: EventEmitter<any> = new EventEmitter();
  @Output() valueChange:EventEmitter<any> = new EventEmitter();

  // new var
  public show_drop_down:boolean=false;
  public new_data: any=[];
  //autocomplete1: any;
  //styling input
  
  //border and border radius for erro
  error_border:string='';
  error_border_radius:string='';

  // for loading
  no_data:boolean=false;
  no_data_msg:string='<i class="fa fa-spinner fa-spin" style="font-size:16px"></i>&nbsp;Data Loading...';
  selectedValue:string='';
  string_selected:string='';

  @ViewChild('divbox',{static:false}) divbox!:ElementRef;
  @HostListener('document:mousedown',['$event'])
  onGlobalClick(event:any):void{
    if(!this.divbox.nativeElement.contains(event.target)){
      this.blur();
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEventDown(event: KeyboardEvent):boolean{
    const cl:HTMLCollectionOf<Element> = document.getElementsByClassName('highlight_border');
    if(event.key=='Tab'){
      this.value[this.valueText] = this.selectedValue;
      this.show_drop_down=false;
    }
    if(cl.length==0)return false;
    if(this.d_d_list==cl[0].getAttribute('data-cl')){
      if (event.key == 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();
        //console.log('cehck')
        return false;
      }else if(event.key=='Enter'){

        if(cl.length==1){
          let el = cl[0] as HTMLElement;
          this.show_drop_down=false;
          el.click();
          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
    }
    return false;
  }
  constructor(private el: ElementRef, private cd:ChangeDetectorRef) {
    this.size_data_rs = deepCopy(this.size_data);
  }

  selected_data:Array<any>=[];
  public handler:any;
  ngOnInit() {
    this.filter_set = this.filter;
    // this.default_value[this.valueText] = '';
    if(this.error){
      this.error_border='3px solid #E00751';
      this.error_border_radius='4px';
    }
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'data':
          this.correct_dataformat(changes[key].currentValue);
        break;
        
        case 'default_value':
          this.selectedValue = changes[key].currentValue[this.valueText];
        break;

        case 'isLoading':
          if(changes[key].currentValue){
            this.no_data_msg='<i class="fa fa-spinner fa-spin" style="font-size:16px"></i>&nbsp;Data Loading...';
          }

      }
    }
  }


  left_set:boolean=true;
  ngAfterViewInit() {
    if(this.drop_down_width!=''){
      let x_y = this.autoComplete1.nativeElement.getBoundingClientRect();
      let ddw = Number(this.drop_down_width.replace('px',''));
      if(window.innerWidth<x_y.x+ddw){
        this.left_set = false;
      }
    }
  }
  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
  random_key(length:number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  check_list_hidden(hn:any,num:number,move:string){
    num = num==this.t_s_list&&move=='Down'?0:num;
    if(hn[num].classList.contains('display_hidden')){
      if(move=='Down'){
        num++;
        num = num==this.t_s_list?0:num;
      }else if(move=='Up'){
        num = num==0?this.t_s_list:num;
        num--;
      }

      this.check_list_hidden(hn,num,move);
    }else{
      this.c_a_list = num;
    }
  }

  correct_dataformat(data:any){
    //if(this.data.length > 0 && this.data[0]['value']==undefined){
      this.data = data.map((el:any,i:number) => {
        el['value'] = el[this.valueText];
        el['bold_value'] = el[this.valueText];
        el.index = i;
        return el;
      });
    //}
  }
  public value_typed:string='';t_s_list:number=0;c_a_list:number=0;d_d_list:string=this.random_key(15);
  value_entered(value:any,event:any=''){
    //this.selectedValue = value;
    this.key_up.emit([event,value]);

    if(this.value_typed!=value){
      this.t_s_list=0;this.c_a_list=0;
      this.value_typed=value;
    }

    if(event.key=='ArrowUp' || event.key=='ArrowDown'){
      event.preventDefault();
      const slides:HTMLCollectionOf<Element> = document.getElementsByClassName(this.d_d_list);
      this.t_s_list=slides.length;
      if(this.t_s_list>0){
        if(event.key=='ArrowDown'){

        if(this.c_a_list>0){
        slides[this.c_a_list-1].classList.remove('highlight_border');
        slides[this.c_a_list-1].setAttribute('data-cl','');
        }
        this.check_list_hidden(slides,this.c_a_list,'Down');
        this.c_a_list = this.t_s_list==this.c_a_list?0:this.c_a_list;
        //console.log(this.c_a_list, slides.length);
        slides[this.c_a_list].classList.add('highlight_border');
        slides[this.c_a_list].setAttribute('data-cl',this.d_d_list);
        slides[this.c_a_list].scrollIntoView(false);
        this.c_a_list++;

        }else if(event.key=='ArrowUp'){

        if(this.c_a_list!=0){
        this.c_a_list--;
        slides[this.c_a_list].classList.remove('highlight_border');
        slides[this.c_a_list].setAttribute('data-cl','');
        }
        this.c_a_list = this.c_a_list<=0?this.t_s_list:this.c_a_list;
        this.c_a_list--;
        this.check_list_hidden(slides,this.c_a_list,'Up');
        slides[this.c_a_list].classList.add('highlight_border');
        slides[this.c_a_list].setAttribute('data-cl',this.d_d_list);
        slides[this.c_a_list].scrollIntoView(false);
        this.c_a_list++;
        }
      }
      return;
    }else if(event.key=='Enter'){
      return;
    }
    this.value_typed=value;
    if(value.length==0){
      this.focus();
    }
    let t_array:any=[];let len:number=0;let new_st:string='';let kdi = {};

    this.wildcard_search();value = this.value_typed;
    if (this.filter == 'startswith') {
      this.data.forEach((element:any) => {
      if(element.value.toLowerCase().indexOf(value.toLowerCase())==0){
        let kdi:any = {};
        len = value.length;
        new_st=this.search_work(element.value,value,'startswith');
        kdi['bold_value']=new_st;
        kdi['value']=element.value;

        if(element.thumbnail_image && element.thumbnail_image!=''){
          kdi['image_icon'] = 'image';
          kdi['image'] = element.thumbnail_image;
        }else if(element.thumbnail && element.thumbnail!=''){
          kdi['image_icon'] = 'icon';
          kdi['thumbnail'] = element.thumbnail;
        }else{
          kdi['image_icon'] = '';
        }
        t_array.push(kdi);
     }
     });
    }else if(this.filter=='endswith'){
      this.data.forEach((element:any) => {
        //element.value.toLowerCase().length - value.toLowerCase().length)!= -1){

        if(element.value.toLowerCase().lastIndexOf(value.toLowerCase())+value.length==element.value.length
      && element.value.toLowerCase().lastIndexOf(value.toLowerCase()) >-1){
      let kdi:any = {};
      len = value.length;
      new_st=this.search_work(element.value,value,'endswith');
      kdi['bold_value']=new_st;
      kdi['value']=element.value;

      if(element.thumbnail_image && element.thumbnail_image!=''){
      kdi['image_icon'] = 'image';
      kdi['image'] = element.thumbnail_image;
      }else if(element.thumbnail && element.thumbnail!=''){
      kdi['image_icon'] = 'icon';
      kdi['thumbnail'] = element.thumbnail;
      }else{
      kdi['image_icon'] = '';
      }
      t_array.push(kdi);
      }
      });
      
    }else if(this.filter=='combination'){
      // for * wildcard search, where startswith and endswith both work
      this.value_typed = this.value_typed.replace('*','');
      let ind = value.indexOf('*'),sub1=this.value_typed.substr(0,ind),sub2 = this.value_typed.substr(ind);
      this.data.forEach((element:any) => {
      //element.value.toLowerCase().length - value.toLowerCase().length) != -1){
      if(element.value.toLowerCase().indexOf(sub1.toLowerCase())==0 &&
      element.value.toLowerCase().lastIndexOf(sub2.toLowerCase())+sub2.length==element.value.length){
      let kdi:any = {};
      //var regEx = new RegExp(value, "ig");
      //new_st = element.replace(regEx, '<b>'+value+'</b>');
      new_st=this.search_work(element.value,sub2,'endswith');
      new_st=this.search_work(new_st,sub1,'startswith');
      kdi['bold_value']=new_st;
      kdi['value']=element.value;

      if(element.thumbnail_image && element.thumbnail_image!=''){
      kdi['image_icon'] = 'image';
      kdi['image'] = element.thumbnail_image;
      }else if(element.thumbnail && element.thumbnail!=''){
      kdi['image_icon'] = 'icon';
      kdi['thumbnail'] = element.thumbnail;
      }else{
      kdi['image_icon'] = '';
      }
      t_array.push(kdi);
      }
      });
    }else{
      this.data.forEach((element:any) => { 
        //element.value.toLowerCase().length - value.toLowerCase().length) != -1){
        if(element.value.toLowerCase().indexOf(value.toLowerCase())>-1){
        let kdi:any = {};
        len = value.length;
        new_st=this.search_work(element.value,value,'contains');
        kdi['bold_value']=new_st;
        kdi['value']=element.value;
        if(element.thumbnail_image && element.thumbnail_image!=''){
        kdi['image_icon'] = 'image';
        kdi['image'] = element.thumbnail_image;
        }else if(element.thumbnail && element.thumbnail!=''){
        kdi['image_icon'] = 'icon';
        kdi['thumbnail'] = element.thumbnail;
        }else{
        kdi['image_icon'] = '';
        }
        t_array.push(kdi);
        }
      });
    }
    this.new_data=t_array;
    if(value=='' && this.string_selected!='' && this.data.length > 0 && this.allowUnselect){
      let lt = {'value':'','bold_value':''}
      this.new_data.unshift(lt);
    }
    this.show_drop_down=true;
    if(this.new_data.length==0){
      this.no_data=true;
      this.no_data_msg='No Data Found';
    }else{
      this.no_data=false;
    }
  }

  indexes(source:any, find:any) {
    source=source.toLowerCase();
    find = find.toLowerCase();
    if (!source) {
      return [];
    }
    if (!find) {
      return source.split('').map(function(_: any, i: any) { return i; });
    }
    var result = [];
    var i = 0;
    while(i < source.length) {
      if (source.substring(i, i + find.length) == find) {
        result.push(i);
        i += find.length;
      } else {
        i++;
      }
    }
    return result;
  }
  search_work(str:string,txt:string,ty:string):string{
    if(txt.length==0)return str;
    switch(ty){
      case 'startswith':
        let aii=this.indexes(str,txt);
        aii.forEach((el:any,i:number)=>{
          if(i==0)
            str = str.substring(0,el)+'<b>'+str.substr(el,txt.length)+'</b>'+str.substring(el+txt.length);
        })
        break;
      case 'contains':
        let ai=this.indexes(str,txt).reverse();
        ai.forEach((el:any)=>{
          str = str.substring(0,el)+'<b>'+str.substr(el,txt.length)+'</b>'+str.substring(el+txt.length);
        })
        break;
      case 'endswith':
        let aiii=this.indexes(str,txt).reverse();
        aiii.forEach((el:any,i:number)=>{
          if(i==0)
            str = str.substring(0,el)+'<b>'+str.substr(el,txt.length)+'</b>'+str.substring(el+txt.length);
        })
        break;
    }
    return str;
  }
  wildcard_search(){
    let wc1 = '%',wc1i = this.value_typed.indexOf(wc1),wcil = this.value_typed.lastIndexOf(wc1);
    let wc2 = '*',wc2i = this.value_typed.indexOf(wc2);
    if(wc1i>-1){
      // here we have to find type of search,startswith,endswith,contains
      if(wc1i==0 && wc1i==wcil){
      this.filter='endswith';
      this.value_typed = this.value_typed.substr(1);
      }else if(wcil>-1 && wcil != wc1i){
      // contains
      this.filter = 'contains';
      this.value_typed = this.value_typed.substr(1,this.value_typed.length-2);
      }else if(wc1i > 0 && wc1i==wcil){
      // startswith
      this.filter = 'startswith';
      this.value_typed = this.value_typed.substr(0,this.value_typed.length-1);
      }
    }else if(wc2i>-1){
      this.filter = 'combination';
    }else{
      this.filter = this.filter_set;
    }
  }
 
  // create_array(){
  //   this.new_data=[];let kdi:any;let t_array:any=[];
  //   this.data.forEach((element:any) => {
  //   element = typeof element=='string'?element:element[this.valueText];
  //   kdi = {};
  //   kdi['bold_value']=element;
  //   kdi['value']=element;
  //   t_array.push(kdi);
  //   });
  //   this.new_data=t_array;
  // }
  open_dropdown(){
    this.show_drop_down=!this.show_drop_down;
    if(this.show_drop_down){
      this.show_drop_down=true;
      this.new_data = this.data;
      this.autoComplete1.nativeElement.focus();
    }else
      this.show_drop_down=false;
  }

  option_clicked(value:any){
    this.value=value;
    //this.string_selected = this.value;
    this.selectedValue = value['value'];

    if(value.value==''){
      this.value = [];
      this.value_cleared.emit();
    }
    this.show_drop_down = false;
    this.blur();
    this.valueChange.emit(this.value);
  }

  public focus_s:boolean=false;
  focus(event:any=''){
    let myTag = this.el.nativeElement.getElementsByClassName("placeholder_css")[0];
    this.size_data[this.size]['lb_top']='-8px';this.focus_s=true;
    if(myTag)
      myTag.classList.add('active');
  }
  
  hndlr:any='';
  blur(ignore:boolean=false){
    let myTag = this.el.nativeElement.getElementsByClassName("placeholder_css")[0];
    this.show_drop_down=false;
    this.no_data=false;
    if(this.selectedValue=='' && myTag){
      this.size_data[this.size]['lb_top']=this.size_data_rs[this.size]['lb_top'];
      myTag.classList.remove('active');
    }
    this.autoComplete1.nativeElement.blur();
    this.autoComplete1.nativeElement.value = this.selectedValue;
      
  }
}

