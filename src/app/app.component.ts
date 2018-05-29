import 'rxjs/add/operator/map';

import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { APP_ICONS } from './shared/';

import { MatDialog } from '@angular/material'

import { Title } from '@angular/platform-browser';
import { TitleService } from './core/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private router: Router, private dialog: MatDialog, private titleService: TitleService, private title: Title) {

    APP_ICONS.forEach(item => {
      iconRegistry.addSvgIcon(item.iconName, sanitizer.bypassSecurityTrustResourceUrl(item.url));
    });


    this.titleService.title.subscribe(title => {
      this.title.setTitle(title);
    });

    // close dialogs when router change
    this.router.events.filter(event => event instanceof NavigationStart).subscribe(() => {
      this.dialog.closeAll();
    });
  }

  ngOnInit() {

  }

}
