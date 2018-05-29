import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { DataSource } from '@angular/cdk/collections';

export interface Resource {
  resourceId: number;
}

export class ResourceTableDatabase<T extends Resource> {
  dataChange: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  get data(): T[] { return this.dataChange.value; }

  get records(): T[] { return [].concat(this.createdItems, this.updatedItems, this.deletedItmes); }

  createdItems: T[] = [];
  updatedItems: T[] = [];
  deletedItmes: T[] = [];

  append(list: T[]) {
    let copiedData = this.data.slice();
    copiedData = copiedData.concat(list);
    this.dataChange.next(copiedData);
  }

  create(entity: T) {
    this.createdItems.unshift(entity);

    let copiedData = this.data.slice();
    copiedData.unshift(entity);
    this.dataChange.next(copiedData);
  }

  update(index, entity: T) {
    if (entity.resourceId) {
      let i = this.updatedItems.findIndex(item => item.resourceId === entity.resourceId);
      if (i > -1) {
        this.updatedItems.splice(i, 1, entity);
      } else {
        this.updatedItems.push(entity);
      }
    } else {
      this.createdItems.splice(index, 1, entity);
    }

    let copiedData = this.data.slice();
    copiedData.splice(index, 1, entity);
    this.dataChange.next(copiedData);
  }

  delete(index, entity: T) {
    if (entity.resourceId) {
      let i = this.updatedItems.findIndex(item => item.resourceId === entity.resourceId);
      if (i > -1) {
        this.updatedItems.splice(i, 1);
      }
      this.deletedItmes.push(entity);
    } else {
      this.createdItems.splice(index, 1);
    }

    let copiedData = this.data.slice();
    copiedData.splice(index, 1)[0];
    this.dataChange.next(copiedData);
  }
}

export class ResouceTableDataSource<T extends Resource> extends DataSource<any> {
  constructor(private database: ResourceTableDatabase<T>) {
    super();
  }
  connect(): Observable<T[]> {
    return Observable.merge(this.database.dataChange).map(() => {
      return this.database.data;
    });
  }

  disconnect() { }
}