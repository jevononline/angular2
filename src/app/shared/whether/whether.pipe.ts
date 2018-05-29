import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whether'
})
export class WhetherPipe implements PipeTransform {

  transform(value: boolean): string {
    if (value == undefined) {
      return '';
    }
    return value ? '是' : '否';
  }

}
