import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSpan'
})
export class TimeSpanPipe implements PipeTransform {

  transform(value: number[]): any {
    let text = '';
    let [level] = value;
    if (level === 0) {
      text = '-';
    } else {
      if ((level & 1) === 1) {
        text += `${value[1]}年`;
      }
      if ((level & 2) === 2) {
        text += `${value[2]}季度`;
      } else if ((level & 4) === 4) {
        text += `${value[2]}月`
      }
    }
    return text;
  }

}
