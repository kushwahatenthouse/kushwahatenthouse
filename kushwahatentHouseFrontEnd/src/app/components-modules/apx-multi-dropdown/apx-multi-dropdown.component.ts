import { HostBinding, HostListener,ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit,ElementRef,ViewChild, Output, EventEmitter,NgModule } from'@angular/core';
import { deepCopy } from '@angular-devkit/core/src/utils/object';

@Component({
  selector: 'apx-multi-dropdown',
  templateUrl: './apx-multi-dropdown.component.html',
  styleUrls: ['./apx-multi-dropdown.component.css']
})
export class ApxMultiDropdownComponent implements OnInit,OnChanges {

  @Input("valueText") valueText:string='valueText';

  selectedDataPre:any=[];selectedDataPre1:any=[];

  private _default_selected:any=[];
  first_call:boolean=true;
  public dfv:any=[];
  @Input() set default_selected(val:any){
    if(val==null){
      this._default_selected = [];
      val=[];
      this.blur();
    }else if(val.length>0){
      this._default_selected = [];
    }

    val.forEach((el:any) => {
      if(typeof el=='object'){
        this.dfv = val;
        if(el[this.valueText] && this._default_selected.indexOf(el[this.valueText])<0){
          this._default_selected.push(el[this.valueText]);
        }
      }else if(this._default_selected.indexOf(el)<0){
        this._default_selected.push(el);
      }
    });
    this.selected_data = this._default_selected.filter(function(i:any,p:any,self:any){
      return self.indexOf(i)==p;
    })


    this._default_selected = this.selected_data;

    if(this.selected_data.length>0 && !this.first_call){
      setTimeout(()=>{
      this.done_all_selected(false);
      },100)
    }
  }
  get default_selected():any{
    return this._default_selected;
  }
  
  @Input() data:any=[];reserveData:any=[];

  @Input("size") size:any; // according to given sizes data will be taken
  @Input("filter") filter:string = 'contains'; // startswith, endswith,contains,no
  @Input() dropdownwrap:boolean = false;
  public filter_set:string='';
  @Input("thumbnail_shape") thumbnail_shape='square';//'circle'/'square'/'none'

  search_frt_d:any={
    'contains':'containing',
    'startswith':'starts with',
    'endswith':'ends with',
    'combination':'wildcard with'
  }
  public size_data_rs:any={ };
  public size_data:any={
  'small':{
      'height':'32px',
      'padding':'6px 16px',
      'lb_padding':'6px 16px',
      'lb_top':'6px',
      'lb_left':'12px',
      'lb_font_size':'14px',
      'cross_padding':'3px 9px',
      'div_top':'30px',
      'div1_top':'86px'
    },
  'medium':{
      'height':'40px',
      'padding':'11px 16px',
      'lb_top':'11px',
      'lb_left':'12px',
      'lb_padding':'11px 16px',
      'lb_font_size':'14px',
      'cross_padding':'6px 9px',
      'div_top':'38px',
      'div1_top':'94px'
    },
  'large':{
      'height':'48px',
      'padding':'14px 16px',
      'lb_top':'14px',
      'lb_left':'12px',
      'lb_padding':'14px 16px',
      'lb_font_size':'14px',
      'cross_padding':'10px 9px',
      'div_top':'46px',
      'div1_top':'102px'
    }
  }
  @Input("autocomplete_name") autocomplete_name:string='';
  @Input("placeholder") placeholder_value:string='SElect name';
  @Input("label_position") label_position:string='';
  @Input("loading_sign") loading_sign:boolean=false;

  @Input("fixed_height") fixed_height:boolean=true;
  fixed_height_selected:boolean=false;
  //styling input
  @Input("width") st_width:string='100%';
  @Input("enableSelectAll") enableSelectAll:boolean = true;//false
  @ViewChild('autoComplete', {static: false}) autoComplete!: ElementRef;
  @ViewChild('pills_div', { static: false })
  pills_div!: ElementRef;
  @ViewChild('pills_div1', { static: false })
  pills_div1!: ElementRef;
  @ViewChild('autocomplete1', { static: false })
  autoComplete1!: ElementRef;
  // passing value to parent
  @Output() value_changed: EventEmitter<any> = new EventEmitter();
  @Output() value_cleared: EventEmitter<any> = new EventEmitter();
  @Output() value_selected: EventEmitter<any> = new EventEmitter();
  @Output() key_up: EventEmitter<any> = new EventEmitter();
  @Output() default_selectedChange:EventEmitter<any> = new EventEmitter<any>();

  // new var
  public opened_dropdown:boolean=false;
  // different sizes
  public filter_data: any=[];
  public filtering:boolean = true;
  public default_value:string='';st_height:string='40px';

  show_drop_down:boolean=false;// show drop down option
  
  show_selected_pills:boolean=false; //no use
  activate_text_status:boolean=false;//highlight text written in input box
  //opitonal variable
  error:boolean=false;
  disabled:boolean=false;
  error_border:string='';
  error_border_radius:string='';
  pop_up_box:boolean=false;//show pop up having pills
  no_data:boolean=false;
  no_data_msg: string='No Data Found';
  constructor(private el: ElementRef,private cdref: ChangeDetectorRef)
  {

  }

  selected_data:Array<any>=[];
  selected_data_pills:Array<any>=[];
  show_pills_div1:boolean=false;
  show_pills_div2:boolean=false;
  more_pills:number=0;
  more_pills_st:string=' ?+more..';

  show_more_pills:boolean=false;
  show_more_opt:string='none';
    entered_value!: string;
  public selectAllState: string = "unchecked"
  @HostListener('window:keyup', ['$event'])
  keyEventDown(event: KeyboardEvent):boolean {
    const cl:HTMLCollectionOf<Element> = document.getElementsByClassName('highlight_border');
    if(event.shiftKey && event.key=='Tab'){
      this.focus_s=false;
    }else if(event.key=='Tab'){
      if(this.sltv==this.autoComplete1.nativeElement.getAttribute('data-cll')){
        this.done_all_selected();
        this.show_drop_down=false;this.focus_s=false;
      }
    }
    if(cl.length==0)return false;
    if(this.d_d_list==cl[0].getAttribute('data-cl')){
      if (event.key == 'ArrowUp') {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }else if(event.key=='Enter'){

        if(cl.length==1){
          let el = cl[0] as HTMLElement;
          el.click();

          //console.log(el.innerHTML);
          //console.log('1111111111111');
          //el.nextElementSibling.classList.toggle('display_hidden');

          event.preventDefault();
          event.stopPropagation();
          return false;
        }
      }
    }
    return false;
  }
  ngOnInit() {

    this.size_data_rs = deepCopy(this.size_data);

    //correcting data
    this.correct_dataformat();this.reserveData = deepCopy(this.data);
    this.total_data_count = this.data.length;

    this.filter_set = this.filter;
    // adding default_selecetd data
    if(this.default_selected.length>0 && this.fixed_height){
      this.fixed_height_selected=this.default_selected.length>0?true:false;
      this.mfhv=this.fixed_height_selected?true:false;
      this.size_data[this.size]['lb_top']='-8px';
    }
    this.default_selected.forEach((el:any) => {
      if(el[this.valueText]){
        if(this.selected_data.indexOf(el[this.valueText])<0)
          this.selected_data.push(el[this.valueText]);
      }else{
        this.selected_data.push(el);
      }
    });
    this.default_selected = this.selected_data.filter(function(i,p,self){
      return self.indexOf(i)==p;
    })
    this.default_selected = this.selected_data;
    this.st_height = this.size_data_rs[this.size]['height'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let key in changes){
      switch(key){
        case 'data':
          this.correct_dataformat();
          this.reserveData = deepCopy(this.data);
          this.total_data_count = this.data.length;
        break;
        
        case 'default_selected':
        break;

      }
    }
    console.log(changes)
  }





  left_set:boolean=true;fhw:string='10px';left_set_tt:boolean=true;
  @Input("drop_down_width") drop_down_width:string='';
  ngAfterViewInit() {
    let x_y = this.autoComplete1.nativeElement.getBoundingClientRect();
    this.fhw = (x_y.width-70)+'px';
    this.left_set_tt = x_y.x+200+x_y.width>window.innerWidth?false:true;

    if(this.drop_down_width!=''){
      let ddw = Number(this.drop_down_width.replace('px',''));
      if(window.innerWidth<x_y.x+ddw){
        this.left_set = false;
      }
    }
    this.first_call= false;
    this.cdref.detectChanges();
    if(this.selected_data.length>0 || this.selectedDataPre.length >0)
      this.done_all_selected();
  }
  @ViewChild('tooltip_p', { static: false })
  tooltip_p!: ElementRef;
  @ViewChild('tooltip_h', { static: false })
  tooltip_h!: ElementRef;
  tooltip_top!: string;
  tooltip_over(){
    let x_y = this.tooltip_p.nativeElement.getBoundingClientRect();
    let hh = this.tooltip_h.nativeElement.getBoundingClientRect().height;
    var y = x_y.y,h=window.innerHeight,tp=0;
    if(y<90){
      tp = Math.floor(y*0.5);
    }else if(y+375>h){
      tp = Math.floor(y+350-h);
    }else{
      tp = 56;
    }
      tp = tp<2?10:(tp>hh+20?hh-20:tp);
      this.tooltip_top = '-'+tp+'px';
  }

  correct_dataformat(){
    //if(this.data.length> 0 && this.data[0]['value']==undefined){
      this.data.forEach((el:any,i:number) => {
        el['value'] = el[this.valueText];
        el['bold_value'] = el[this.valueText];
        el['selected'] = false;
        el.index = i;
      });
    //}
    this.new_data=this.data;
    this.select_all_label= '<b>'+this.new_data.length+' '+this.search_frt_d[this.filter]+''+this.default_value+'</b>';
  }

  open_dropdown(){
    this.opened_dropdown=true;
    this.no_data=true;
    if(this.data.length==0){
      this.no_data_msg = 'No data found';
    }
    this.show_drop_down=true;
    this.select_all_label= this.selected_count==0?'All':this.select_all_label;

    this.autoComplete1.nativeElement.focus();
    
    console.log('copied')
    return;
    if(this.default_value.length>0){
      this.value_entered(this.default_value);
    }else{
      if(this.opened_dropdown){
        this.show_drop_down=true;
        this.correctDataForamt();
      }
    }
  }

  correctDataForamt(){
    let t_array:any=[];let kdi:any = {};
    this.data.forEach((element:any) => {

    kdi = {};
    kdi['bold_value']=element.value;
    kdi['value']=element.value;
    kdi.image =
    element.thumbnail_image&&element.thumbnail_image!=''?element.thumbnail_image:'';
    kdi.thumbnail = element.thumbnail&&element.thumbnail!=''?element.thumbnail:'';
    kdi.color=element.color && element.color!=''?element.color:'';
    t_array.push(kdi);

    });
    this.new_data=t_array;
    if(this.new_data.length==0){
    this.no_data=true;

    }
    this.select_all_label= 'All';
  }
  
  take_thumbnail(val:string){
    let d = '';
    if(this.data.length>0){
      this.data.forEach((el:any) => {
      if(el.value==val && el.thumbnail_image!=undefined && el.thumbnail_image!=null && el.thumbnail_image!=''){
        d = el.thumbnail_image;
      }else if(el.value==val && el.thumbnail!=undefined && el.thumbnail!=null){
        d = el.thumbnail;
      }
      });
    }else if(this.dfv.length>0){
      this.dfv.forEach((el:any) => {
      if(el[this.valueText]==val && el.thumbnail_image!=undefined && el.thumbnail_image!=null && el.thumbnail_image!=''){
        d = el.thumbnail_image;
      }else if(el.value==val && el.thumbnail!=undefined && el.thumbnail!=null){
        d = el.thumbnail;
      }
      });
    }
    return d;
  }

  take_thumbnail_color(val:string){
    let d = '';
    if(this.data.length>0){
      this.data.forEach((el:any) => {
      if(el.value==val && el.thumbnail!=undefined && el.thumbnail!=null && el.color!=null){
        d = el.color;
      }
      });
    }else if(this.dfv.length>0){
      this.dfv.forEach((el:any) => {
      if(el.value==val && el.thumbnail!=undefined && el.thumbnail!=null && el.color!=null){
        d = el.color;
      }
      });
    }
    return d;
  }

  // save changes in pop up box
  save_changes(){
    this.pop_up_box=false;

    this.selectedData = [...this.selectedDataholder];
    // let ha:any = [];
    // this.selectedData = this.selectedData.filter((el:any)=>{
    //   if(ha.indexOf(el.index)<0){
    //     ha.push(el.index);
    //     return true;
    //   }else{
    //     return false;
    //   }
    // })

    this.data = [...this.dataHolder];

    // this.data.forEach((el:any)=>{
    //   if(ha.indexOf(el.index)>-1){
    //     el.selected = true;
    //   }
    // });

    this.selected_count = this.selectedData.length;
    this.selectedDataholder = [];
    this.dataHolder = [];
    this.show_drop_down=false;
    this.done_all_selected();
  }
  //remove all in pop up
  remove_all(){
    this.selectedDataholder = [];
    this.dataHolder.forEach((el:any) => {
      el.selected = false;
    });
  }

  // select all options
  select_all(){
    this.dataHolder.forEach((el:any) => {
      el.selected = true;
    });
    this.selectedDataholder = Object.assign([],this.dataHolder);
    this.check_changes_made();
  }

  // called for adding and removing pop up options
  selectedDataholder:any=[];dataHolder:any=[];
  pop_up_add_remove(event:any,value:any){

    if(event.state){
      value.selected = true;
      this.selectedDataholder.push(value);
    }else{
      value.selected = false;
      this.selectedDataholder.splice(this.selectedDataholder.indexOf(value),1);
    }
    this.check_changes_made();
    console.log(this.selectedDataholder)
  }

  // only used to check whether changes r made in selection or not
  changesMade:boolean = false;
  check_changes_made(){
    console.log('check')
    if(this.selectedData=== this.selectedDataholder){
      this.changesMade = false;
    }else{
      this.changesMade = true;
    }
  }


// open pop up box for showing options
  open_pop_up(){
    this.pop_up_box=true;
    this.dataHolder = deepCopy(this.reserveData);
    this.dataHolder.forEach((el:any) => {
      this.selectedData.forEach((e:any)=>{
        if(e.index==el.index)
          el.selected = true;
      })
    });
    this.selectedDataholder = deepCopy(this.selectedData);
    this.cdref.detectChanges();
  }

  // pills cross option clickedc
  outputEvent(event:any){
    if(this.selected_data.indexOf(event[0])>-1){
      this.selected_data.splice(this.selected_data.indexOf(event[0]),1);
    }else{
      this.selected_data.push(event[0]);
    }
    this.done_all_selected();
  }
  // adjusting div2 of pills
    adjust_div2(lz?:number){
    let pills2 = this.el.nativeElement.getElementsByClassName("pills_div2");
    let pill_div_width = this.pills_div.nativeElement.clientWidth-28;
    let pills_adjusted2 = 0;
    lz = lz?lz:this.selected_data_pills.length;//alert(lz+' a');
    for(let i=0;i<pills2.length;i++){
      //console.log(pill_div_width, pills2[i].clientWidth);
      pill_div_width = pill_div_width - pills2[i].clientWidth;//alert(i+' t');
      //console.log(pill_div_width, pills2[i].clientWidth);
      if(pill_div_width>0){
        pills_adjusted2++;//alert(pills_adjusted2+' m');
      }else{
        break;
      }
    }

    return pills_adjusted2;
  }

  rtn_cmp_data(val:any,emitfnc:boolean){
    let rd:any = [];
    this.data.forEach((el:any) => {
      if(val.indexOf(el.value)>-1 || val.indexOf(el[this.valueText]) > -1){
        rd.push(el);
      //this.value_selected.emit(el);
      }
    });

    if(emitfnc){
      this.default_selected = rd;
      this.default_selectedChange.emit(this.default_selected);
      this.value_selected.emit(rd);
    }
  }

  bringslt(){
    this.selectedDataPre = [];
    this.new_data.forEach((el:any) => {
      if(this.selected_data.indexOf(el.value)>-1){
      this.selectedDataPre.push(el);
      }
    });
  }

  // done for all selected value
  mfhv:boolean=false;// make firxed height number visible
  scrollData:string='';
  done_all_selected(emitfnc:boolean=true){
    
    this.opened_dropdown=false;
    this.default_value='';
    this.fixed_height_selected=true;
    this.show_drop_down=false;
    this.value_selected.emit(this.selectedData);
    this.tooltipData = this.tooltip_data();
    this.mfhv = true;this.scrollData = '';
    this.selectedData.forEach((el:any) => {
      this.scrollData+=el.value+', ';
    });
    console.log(this.selectedData)
    return;

    this.rtn_cmp_data(this.selected_data,emitfnc);
    this.mfhv=true;
    //this.bringslt();
    // for fixed only count number and return
    if(this.fixed_height){
      this.fixed_height_selected=true;
      this.show_drop_down=false;
    }
    this.blur();
  }



  // for clearing all selected value
  clear_all_selected(event:any){
    this.show_drop_down=false;
    // this.default_value='';
    // this.mfhv=false;
    // this.select_all_label="All";
    // this.st_height = this.size_data_rs[this.size]['height'];
    // this.clear_activate(event);
    // this.value_cleared.emit();
    // this.value_selected.emit();
    // this.value_changed.emit();
    this.blur();
  }

  //function return tru/false according to given data is selected or not
  check_selected_data(val:string):boolean{
    if(this.selected_data.indexOf(val)>-1)
      return true;
    else
      return false;
  }

  selected_count:number=0;total_data_count:number=0;return_call1:number=0;selectedData:any = [];
  option_clicked(d:any,stt:string='n'){
    if(stt=='y' || this.return_call1==1){
      this.return_call1++;return;
    }else{
      this.return_call1=0;
    }
    
    let value = d.value;let st; // to be removed

    d.selected = !d.selected;
    if(d.selected){
      this.selected_count++;
      this.selectedData.push(d);
    }else{
      this.selected_count--;
      this.selectedData.splice(this.selectedData.indexOf(d),1);
    }
    //console.log(this.data)
    return;

    if(this.selected_data.indexOf(value)>-1){
      st.checked=false;
      this.removing_unchecked_one(this.selected_data.indexOf(value));
    }else{
      st.checked=true;
      this.selected_data.push(value);
    }
    this.activate_text_status=true;
    // checked whether selected item is more than one or not
    

    //console.log(st.checked);
    //console.log(this.selected_data);
  }


  removing_unchecked_one(no:number){
    if (no > -1) {
      this.selected_data.splice(no, 1);
    }
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

  fix_placeholder(){
    if(!this.focus_s || this.size_data[this.size]['lb_top']!='-8px')
      this.focus();
  }

  public new_data: any=[];
  public value_typed:string='';t_s_list:number=0;c_a_list:number=0;d_d_list:string=this.random_key(15);d_d_list2:string=this.random_key(16);
  select_all_label:string="All";
  value_entered(value:string,event:any=''){
    console.log(this.selectedData)
    this.key_up.emit([event,value]);
    // making keyboard up/down movement to default
    if(this.value_typed!=value){
      this.t_s_list=0;this.c_a_list=0;
      this.value_typed=value;
    }
    //console.log(event)
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

          //if list comes to first then go to last

          this.c_a_list = this.c_a_list<=0?this.t_s_list:this.c_a_list;
          this.c_a_list--;
          this.check_list_hidden(slides,this.c_a_list,'Up');
          //console.log(this.c_a_list);
          slides[this.c_a_list].classList.add('highlight_border');
          slides[this.c_a_list].setAttribute('data-cl',this.d_d_list);
          slides[this.c_a_list].scrollIntoView(false);
          this.c_a_list++;

          //slides[this.c_a_list].style.border='1px solid red';
        }
      }
        return;
    }else if(event.key=='Enter'){
        return;
    }
    this.value_typed=value;
    this.default_value=value;
    
    let t_array:any=[];let len:number=0;let new_st:string='';let kdi:any = {};let khd=0;

    //console.log(this.data)
    this.wildcard_search();

    this.reserveData.forEach((el:any) => {
      kdi = {};
      kdi = el;
      new_st = '';
      len = value.length;
      khd=0;
      this.selectedData.forEach((e:any) => {
        if(el.index==e.index && khd<1){
          khd =1;
          kdi.selected = e.index==el.index?true:false;
        }
      });
      if(this.filter=='startswith' && el.value.toLowerCase().indexOf(value.toLowerCase())==0){
        new_st='<b>'+el.value.substring(0,len)+'</b>'+el.value.substring(len);
      }else if(this.filter=='endswith' && el.value.toLowerCase().lastIndexOf(value.toLowerCase())+value.length==el.value.length){
        new_st =el.value.substr(0,el.value.toLowerCase().lastIndexOf(value.toLowerCase()))+'<b>'+el.value.substr(el.value.toLowerCase().lastIndexOf(value.toLowerCase()),len)+'</b>';
      }else if(this.filter == 'combination'){
        this.value_typed = this.value_typed.replace('*','');
        let ind = value.indexOf('*'),sub1=this.value_typed.substr(0,ind),sub2 = this.value_typed.substr(ind);
        if(el.value.toLowerCase().indexOf(sub1.toLowerCase())==0 && el.value.toLowerCase().lastIndexOf(sub2.toLowerCase())+sub2.length==el.value.length){
          new_st=this.search_work(el.value,sub1,'startswith');
          new_st=this.search_work(new_st,sub2,'endswith');
        }
      }else if(el.value.toLowerCase().indexOf(value.toLowerCase())>-1){
        new_st = this.search_work(el.value,value,'contains');
      }

      if(new_st!=''){
        kdi['bold_value']=new_st;
        t_array.push(kdi);
      }

    });
    this.data=t_array;
    this.select_all_label= '<b>'+this.data.length+' '+this.search_frt_d[this.filter]+' '+this.default_value+'</b>';
    this.select_all_label= this.selected_count==0 && value.length==0?'All':this.select_all_label;
    this.show_drop_down=true;
    if(this.data.length==0){
      this.no_data=true;this.no_data_msg='No Data Found';
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
      return source.split('').map(function(_:any, i:number) { return i; });
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
    switch(ty){
      case 'contains':
        let ai=this.indexes(str,txt).reverse();
        ai.forEach((el:any)=>{
        str = str.substring(0,el)+'<b>'+str.substr(el,txt.length)+'</b>'+str.substring(el+txt.length);
        })
      break;
      case 'startswith':
        let aii=this.indexes(str,txt);
        aii.forEach((el:any,i:number)=>{
        if(i==0)
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

  sltv!: string;
  clear_activate(event:any,e:any=''){
    this.fix_placeholder();
    //console.log(e.key)
    if (e.key == 'ArrowUp' || e.key=='ArrowDown' || e.key=='Enter') {
      return;
    }else if(e.key=='Tab'){
      this.sltv=this.d_d_list2;
    }
    if(this.activate_text_status){
      this.activate_text_status=false;
      event.classList.remove('activate_text');
      this.default_value='';
    }

  }
  open(){
  //console.log('open');
  }
  close(){
  //console.log('close');
  }
  public focus_s:boolean=false;
  focus(){
    let myTag = this.el.nativeElement.getElementsByClassName("placeholder_css")[0];
    this.size_data[this.size]['lb_top']='-8px';this.focus_s=true;//this.open_dropdown();
    if(myTag)
      myTag.classList.add('active');
  }
  cancel_blur:boolean=false;
  click_monitor(){
    this.cancel_blur=true;
    clearTimeout(this.hndlr);
  }

  hndlr:any;
  blur(){//alert();
    let myTag = this.el.nativeElement.getElementsByClassName("placeholder_css")[0];
    this.hndlr=setTimeout(()=>{
      if(!this.cancel_blur){
      this.show_drop_down=false;
      this.default_value='';
      this.focus_s=false;
      if((this.default_value=='' || this.default_value==undefined) && myTag && !(this.fixed_height && this.selected_count>0)){
        myTag.classList.remove('active');
        this.size_data[this.size]['lb_top']=this.size_data_rs[this.size]['lb_top'];
      }
      this.autoComplete1.nativeElement.blur();
      }else{
      this.cancel_blur=false;
      }
    },100);
    this.no_data=false;
    //alert(this.default_value);

    const slides:HTMLCollectionOf<Element> = document.getElementsByClassName(this.d_d_list);
    if(slides.length>0 && this.c_a_list > 1 && slides[this.c_a_list-1].classList.contains('highlight_border')){
      slides[this.c_a_list-1].classList.remove('highlight_border');
      this.c_a_list=0;
    }
    //console.log('blur');
  }

  tooltipData:string='';
  tooltip_data():string{
    let data='';let i=0;let j =0;
    this.selectedData.forEach((el:any) => {
      if(i<5)
        data+='<div>'+el.value+', </div>';
      else
        j++;
      i++;
    });
    if(j>1)
      data=data.substring(0,data.length-6)+'... +'+(j-1)+'</div>';

    return data;
  }

  return_call2:number=0;
  selectAllItems(cs:string){
    // if(stt=='y' || this.return_call2==1){
    //   this.return_call2++;return;
    // }else{
    //   this.return_call2=0;
    // }
    let fs:boolean =false;let tmpl:number = 0;
    
    switch(cs){
      case 'Unselected':
        fs = true;
        this.selectedData = [...this.selectedData,...this.data];
        let addar:any = [];
        this.selectedData = this.selectedData.filter((el:any)=>{
          if(addar.indexOf(el.index)<0){
            addar.push(el.index);
            return true;
          }else{
            return false;
          }
        })
        this.selected_count = this.selectedData.length;
        this.data.forEach((el:any) => {
          el.selected = true;
        });
      break;

      case 'Indeterminate':
        let varr:boolean=false;let catched:boolean = false;
        this.data.forEach((el:any) => {
          if(!varr && !el.selected)
            varr = true;

        });
        this.data.forEach((el:any)=>{
          el.selected = varr;catched=false;
          this.selectedData.forEach((e:any,i:number)=>{
            if(e.index==el.index && !varr){
              this.selectedData.splice(i,1);
              catched = true;
            }else if(e.index==el.index){
              catched = true;
            }
          })
          
        if(!catched)
          this.selectedData.push(el);
        })
        this.selected_count = this.selectedData.length;
      break;

      case 'Selected':
        this.data.forEach((el:any)=>{
          el.selected = false;
        })
        this.selectedData = [];
        this.selected_count = 0;
      break;
    }
    return;
    if(this.total_data_count==this.selected_count){
      this.selected_count = this.selected_count - tmpl;
      fs = false;
      let adda1  = [];
      this.selectedData = this.selectedData.filter((el:any)=>{
        this.data.forEach((ell:any)=>{
          if(el.index==ell.index)
            return false;
          else
            return true;
        })
      })
    }else{
      fs = true;
      this.selectedData = [...this.selectedData,...this.data];
      let addar:any = [];
      this.selectedData = this.selectedData.filter((el:any)=>{
        if(addar.indexOf(el.index)<0){
          addar.push(el.index);
          return true;
        }else{
          return false;
        }
      })
      this.selected_count = this.selectedData.length;
    }
    this.data.forEach((el:any) => {
      el.selected = fs;
    });
  }

}