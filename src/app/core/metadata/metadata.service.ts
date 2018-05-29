import { Injectable } from '@angular/core';

@Injectable()
export class MetadataService {
  data: { [key: string]: { [key: string]: IdNameValuePair } };

  constructor() { }

  get(key: string) {
    return this.data[key];
  }
}
