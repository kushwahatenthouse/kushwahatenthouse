import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {  Editor, Toolbar, NgxEditorComponent } from 'ngx-editor';
import { AngularEditorComponent, AngularEditorConfig, UploadResponse } from '@kolkov/angular-editor';

import { ImpFunctionService } from '../imp_function/imp-function.service';

import schema from './node';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'apx-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TextEditorComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '200px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'insertImage'
      ]
    ]
  };

  @ViewChild('angulareditor') angulareditor!: AngularEditorComponent;


  editor!: Editor;html:any= '';
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  @ViewChild('editorvc') editorvc!:NgxEditorComponent;
  @ViewChild('editordiv') editordiv!:ElementRef;
  http: any;
  
  
  constructor(private impfnc:ImpFunctionService) { }

  ngOnInit(): void {
    this.editor = new Editor(
      {keyboardShortcuts: true,schema});
    this.editor.valueChanges.subscribe((data:any)=>{
      let da = this.editordiv.nativeElement.children[1].children[0].children[0].innerHTML;
      
        console.log(da)
        
      
      
    })

  }

  ngAfterViewInit(){
    // this.editorvc.outputFormat = 'html';
    //this.editordiv.nativeElement.children[1].children[0].children[0].style.minHeight='200px'
    
  }
  onChange(html: object) {
    this.html = '';
    console.log(html)
    
  }
  focused(){
    //console.log(this.editor)
    //this.editordiv.nativeElement.children[1].children[0].children[0].innerHTML=`<div> ffff </div>`;
    //this.editor.commands.insertHTML('<div> ffff76 </div>').exec();
  }

  textFormat(val:any){
    console.log(val,'oo');
    this.editor.commands.focus().exec();
  }




  // add table popup
  tableRow:string='2';
  tableColumn:string='2';tablewidth:string='0';
  buttons:any=[
    {
      label:'Add Table',button_type:'primary',
    },
    {
      label:'Close'
    }
  ];
  showtablePopup:boolean = false;table_err_msg:string='';
  isHeader:boolean=false;
  isStriped:boolean=false;
  addTable(){
    this.showtablePopup=true;
  }

  addTableClick(val:any){
    let trow = Number(this.tableRow),tcol = Number(this.tableColumn);
    if(trow>20 || tcol >10 || isNaN(trow) || isNaN(tcol)){
      this.table_err_msg = '*add valid row and column number';
      return;
    }

    let data = this.createTable(trow,tcol);

    if(val=='Add Table'){
      this.angulareditor.executeCommand('insertHtml',data);
    }
    this.showtablePopup = false;
    this.isHeader = false;this.isStriped = false;this.tableColumn='2';this.tableRow = '2';this.table_err_msg = '';

  }
  tbcheckbox(wh:boolean,st:string){console.log(wh,st)
    this.isHeader = st=='header'?wh:this.isHeader;
    this.isStriped = st=='striped'?wh:this.isStriped;
  }

  createTable(row:Number,column:Number,header:boolean=false):string{
    let isstp = this.isStriped ? 'striped-table':'';
    let d = '<table style="max-width:100%;overflow:auto" class="'+isstp+'">';
    
    if(this.isHeader || true){
      d+='<tr>';
      for(let j=0;j<column;j++){
        d+='<th>&nbsp;</th>';
      }
      d+='</tr>';
    }

    for(let i=0;i<row;i++){

      d+='<tr>';
      for(let j=0;j<column;j++){
        d+='<td>&nbsp;</td>';
      }
      d+='</tr>';

    }
    d+='</table><br>';
    return d;

  }

  // add table ends here


  

  
  // add image starts here 
  showImagepopup:boolean =false;imagewidth:string='';imgHTML:string='';imgSrc:string='';imgscsmsg:string='';

  buttonsi:any=[
    {
      label:'Add Image',button_type:'primary',disabled:true
    },
    {
      label:'Close'
    }
  ];
  addImage(){
    this.showImagepopup=true;
  }

  
  addImageClick(val:any){
    if(val=='Add Image'){
      if(this.imgSrc!=''){
        this.createImgSrc();
        this.angulareditor.executeCommand('insertHtml',this.imgHTML);
        this.angulareditor.focus();
      }
    }
    this.showImagepopup = false;
    this.imgHTML = '';
    this.imagewidth = '';
    this.imgSrc = '';
    this.imgscsmsg = '';
  }

  uploadImageRaw(val:any){
    if(val.file == null){
      this.buttonsi[0].disabled = true;
    }else{
      this.impfnc.renderImage(val.file);
      this.impfnc.impfuncService.subscribe((data:any)=>{
        if(data.func=='renderImage'){
          this.imgSrc = data.data;
          this.buttonsi[0].disabled = false;
        }
      })
    }
  }

  createImgSrc(){
    this.imgHTML = '<img style="width:'+this.imagewidth+'" src="'+this.imgSrc+'" />';
  }


}
