import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, type:string=''): string {
    let val='';
    type = type==''?(value >999999?'M':(value>999?'K':'')):type;
    switch(type){
      case '':
        val = value+'';
        break;
      case 'K':
        val = ((value/1000)+'').substring(0,4)+'K';
        break;
      case 'M':
        val = ((value/1000000)+'').substring(0,4)+'M';
        break;
        
    }
    return val;
  }

}
