import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (!this.route.firstChild) {
      let routeConfig = this.route.routeConfig;
      this.router.navigate([routeConfig.children[0].path], { relativeTo: this.route, replaceUrl: true });
    }
  }

}
