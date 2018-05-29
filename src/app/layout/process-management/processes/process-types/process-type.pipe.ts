import { find } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

@Pipe({
  name: 'processType'
})
export class ProcessTypePipe implements PipeTransform {

  constructor(private metadataService: MetadataService) {

  }
  transform(value: number): string {
    return find(this.metadataService.get('PlanType'), { value }).name;
  }

}
