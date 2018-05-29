import { findIndex, intersectionWith } from 'lodash';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SuperSelectComponent } from '../../../../../shared/';
import { Department } from '../../departments/department';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-select',
  templateUrl: './post-select.component.html',
  styleUrls: ['./post-select.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PostSelectComponent), multi: true }],
  exportAs: 'appPostSelect'
})
export class PostSelectComponent extends SuperSelectComponent implements OnChanges {

  @Input()
  departments: Department[] = [];

  constructor(private postsService: PostsService) {
    super();
  }

  compareWith(a, b) {
    return a != undefined && b != undefined && a.id === b.id;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.departments) {
      if (!changes.departments.firstChange) {
        this.get().then(() => {
          this.optionsChange();
          //  
          this.onChange();
        });
      }
    }
  }

  posts: Post[] = [];

  get() {
    return new Promise<any[]>((resolve) => {
      if (this.departments && this.departments.length > 0) {
        let ids = this.departments.filter(item => !!item).map(item => item.id);
        if (ids.length > 0) {
          this.postsService.getGroupedByDepartments(ids).subscribe(data => {
            resolve(data);
          });
        } else {
          resolve([]);
        }
      } else {
        resolve([]);
      }
    }).then(data => {
      this.list = data;
      if (this.list.length > 0) {
        this.posts = this.list.map(item => item.posts).reduce((prev, curr) => prev.concat(curr), []);
      } else {
        this.posts = [];
      }
    });
  }

  optionsChange() {

    if (this.multiple) {
      this.myModel = intersectionWith(this.myModel, this.posts, this.compareWith);
    } else {
      if (this.myModel) {
        if (!(findIndex(this.posts, { id: this.myModel.id }) > -1)) {
          this.myModel = undefined;
        }
      }
    }
  }

  selectAll() {

    if (this.multiple) {
      this.myModel = this.posts;
      this.onChange();
    }
  }

}
