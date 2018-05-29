import { find } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

@Pipe({
  name: 'announcementStatus'
})
export class AnnouncementStatusPipe implements PipeTransform {
  constructor(private metadataService: MetadataService) {

  }

  transform(value: number): string {
    return find(this.metadataService.get('AnnouncementStatuses'), { value }).name;
  }

}
