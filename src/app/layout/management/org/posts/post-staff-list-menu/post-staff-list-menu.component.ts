import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Post } from '../post';
@Component({
  selector: 'app-post-staff-list-menu',
  templateUrl: './post-staff-list-menu.component.html',
  styleUrls: ['./post-staff-list-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostStaffListMenuComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }



}
