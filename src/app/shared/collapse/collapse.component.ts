import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'ux-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [trigger('collapseState', [
    state('collapsed', style({ height: 0, overflow: 'hidden' })),
    state('expanded', style({ height: '*', overflow: 'hidden' })),
    transition('collapsed => expanded, expanded => collapsed', animate('250ms ease-in-out'))
  ])],
  host: {
    'class': 'ux-collapse'
  }
})
export class CollapseComponent implements OnInit {

  @HostBinding('class.ux-collapsed')
  private collapsed: boolean;
  collapseState: 'collapsed' | 'expanded';

  @Input()
  get isCollapsed(): boolean {
    return this.collapsed;
  }
  set isCollapsed(value: boolean) {
    this.collapsed = value;
    this.collapseState = value ? 'collapsed' : 'expanded';
  }

  constructor() { }

  ngOnInit() {

  }

}
