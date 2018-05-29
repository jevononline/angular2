import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import { Component, Input, Optional, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';

import { LayoutComponent } from '../../../layout.component'

import { SystemMapService } from '../system-map.service';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';

@Component({
  selector: 'app-system-map-for-post',
  templateUrl: './system-map-for-post.component.html',
  styleUrls: ['./system-map-for-post.component.scss']
})
export class SystemMapForPostComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('container')
  container: ElementRef;

  subscription: Subscription;

  @Input()
  standardSystems: StandardSystem[];

  constructor( @Optional() private layout: LayoutComponent, private systemMapService: SystemMapService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.systemMapService.buildStage({
        container: this.container,
        stageWith: this.container.nativeElement.offsetWidth, stageHeight: this.container.nativeElement.offsetHeight,
        standardSystems: this.standardSystems
      });

      this.systemMapService.renderForPost();

      if (this.layout) {
        this.subscription = Observable.merge(this.layout.sidenav.onOpen, this.layout.sidenav.onClose).subscribe(() => {
          this.systemMapService.resize();
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('window:resize')
  resize() {
    this.systemMapService.resize();
  }

}
