import { find } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { MetadataService } from '../../../../../core/metadata/metadata.service';

@Pipe({
  name: 'staffStatus'
})
export class StaffStatusPipe implements PipeTransform {
  constructor(private metadataService: MetadataService) {

  }
  transform(value: number): any {
    return find(this.metadataService.get('StaffStatuses'), { value }).name;
  }

}
