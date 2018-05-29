import * as Konva from 'konva';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/merge';
import { Optional, Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { LayoutComponent } from '../../layout.component'

import { SystemMapService } from './system-map.service';
import { StandardSystem } from '../../system-management/standard-system/standard-system';

@Component({
  selector: 'app-system-map',
  templateUrl: './system-map.component.html',
  styleUrls: ['./system-map.component.scss']
})
export class SystemMapComponent implements OnInit, AfterViewInit {

  @ViewChild('container')
  container: ElementRef;

  @Input()
  standardSystems: StandardSystem[];

  subscription: Subscription;

  constructor( @Optional() private layout: LayoutComponent, private systemMapService: SystemMapService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {

      this.systemMapService.buildStage({
        container: this.container,
        stageWith: this.container.nativeElement.offsetWidth,
        stageHeight: this.container.nativeElement.offsetHeight,
        standardSystems: this.standardSystems
      });
      this.systemMapService.render();

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
