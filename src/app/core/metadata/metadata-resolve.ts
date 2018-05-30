import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';

import { MetadataService } from './metadata.service';

@Injectable()
export class MetadataResolve implements Resolve<any>{

	constructor(private http: HttpClient, private metadataService: MetadataService) {

	}

	resolve() {
		return this.http.get<{ [key: string]: { [key: string]: IdNameValuePair } }>('/api/metadata').map(data => {
			this.metadataService.data = data;
			return data;
		});
	}
}
