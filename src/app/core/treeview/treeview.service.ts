import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TreeviewService {

	view = new EventEmitter();

	activated: any;

	constructor() { }

	refresh() {
		this.view.next();
	}
}
