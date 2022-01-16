import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {


  transform(value: any, ...args: unknown[]): any {
    let now = new Date();
    var date =  now.getDate() + 31;
    let nowWithoutTime:any = new Date(now.getFullYear(), now.getMonth(), date);


    var dateDifference = Math.abs(nowWithoutTime - value)
    var dateDifferenceSeconds = dateDifference * 0.001;
    const seconds = 86400;

    let counter = Math.floor(dateDifferenceSeconds/seconds)

  }

}
