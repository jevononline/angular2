import { find } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

@Pipe({
  name: 'standardRevisionType'
})
export class StandardRevisionTypePipe implements PipeTransform {
  constructor(private metadataService: MetadataService) {

  }
  transform(value: number) {
    if (value == undefined) {
      return '';
    }
    return find(this.metadataService.get('StandardRevisionTypes'), { value }).name;
  }

}
