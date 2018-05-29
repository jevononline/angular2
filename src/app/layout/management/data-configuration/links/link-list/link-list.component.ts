

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinksService } from '../links.service';
import { Link } from '../link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {

  list: Link[] = [];
  constructor(private router: Router, private linksService: LinksService) { }

  ngOnInit() {
    this.linksService.get({ page: 1, limit: 5 }).subscribe(data => {
      this.list = data.results;
    });
  }

}
