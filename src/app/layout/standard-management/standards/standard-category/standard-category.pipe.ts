import { find, values } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { MetadataService } from '../../../../core/metadata/metadata.service';

@Pipe({
  name: 'standardCategory'
})
export class StandardCategoryPipe implements PipeTransform {

  constructor(private metadataService: MetadataService) {

  }

  transform(value: number): string {
    return find(this.metadataService.get('StandardCategories'), { value }).name;
  }

}
