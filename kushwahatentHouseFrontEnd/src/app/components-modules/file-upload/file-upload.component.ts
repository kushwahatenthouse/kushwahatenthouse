import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'apx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit,OnChanges {

  @Input() multiple:boolean = false;
  @Input() maxLimit:number=0;// byte
  @Input() FileType:any = [];// empty means all allowed here extension will be added
  @Input() successMessage:string='';

  @Input() buttonStyle:any={
    label:'File Upload',
    size:'S',
    
  };

  private _success_msg:string = '';
  @Input() 
    set success_msg(val:string){
      this._success_msg = val;
    }
    get success_msg():string{
      return this._success_msg;
    }

  @Output() UploadedFile:EventEmitter<any> = new EventEmitter;
  @Output() success_msgChange:EventEmitter<any> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }


  error:boolean = false;
  error_msg:string='';tooltipmsg:string='';
  uploaded_file(file:any){
    let data = file.target.files;let ext:string='',size:number=0;let j = 0;
    this.error = false;
    this. error_msg='';

    for(let i=0;i<data.length && !this.error;i++){
      // first check file type
      j = data[i].name.lastIndexOf('.');
      ext = data[i].name.substr(j+1);
      size = data[i].size;
      if(this.FileType.length > 0 && this.FileType.indexOf(ext) < 0){
        this.error = true;
        this.error_msg = 'Invalid File Type '+data[i].name;
        this.tooltipmsg = 'Allowed File types are <b>'+ this.FileType+'</b>';
      }else if(this.maxLimit > 0 && this.maxLimit < size){
        this.error = true;
        this.error_msg = 'File Size Exceeded';
        this.tooltipmsg = 'Max limit for file size <b>'+ this.maxLimit+'</b>';
      }

      if(!this.error){
        this.success_msg = this.successMessage!='' ? this.successMessage : (data.length==1 ? data[0].name : 'Files Uploaded');
        data = data.length==1?data[0]:data;
        this.UploadedFile.emit({'file':data})
      }

    }
    file.target.value = '';
  }

  clearFile(){
    this.success_msg = '';
    this.UploadedFile.emit({'file':null})
    this.success_msgChange.emit(this.success_msg);
  }

}
