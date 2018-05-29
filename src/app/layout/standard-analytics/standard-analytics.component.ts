import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standard-analytics',
  templateUrl: './standard-analytics.component.html',
  styleUrls: ['./standard-analytics.component.scss']
})
export class StandardAnalyticsComponent implements OnInit {

  view: string;

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
    if (!activateRoute.snapshot.params.view) {
      this.router.navigate(['./', { view: 'standard-asset-analysis' }], { replaceUrl: true });
    }
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.view = params.view;
    });
  }



}
