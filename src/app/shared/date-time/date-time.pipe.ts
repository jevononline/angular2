import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: Date): string {
    if (value == undefined) {
      return '';
    }
    // date time format
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
  }

}
