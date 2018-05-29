import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(value: boolean): string {
    if (typeof value === 'boolean') {
      if (value) {
        return '启用';
      } else {
        return '禁用';
      }
    } else {
      return '';
    }

  }

}
