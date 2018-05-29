import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

interface MyData {};

export class StaticDataSource extends DataSource<MyData> {

	constructor(private staticData: MyData[]) {
		super();
	}

	connect (): Observable<MyData[]> {
		return Observable.of(this.staticData);
	}

	disconnect() {

	};
}