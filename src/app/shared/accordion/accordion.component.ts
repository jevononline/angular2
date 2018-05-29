import { Component, Input, OnInit, AfterViewInit, Directive, ChangeDetectionStrategy, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'ux-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
class AccordionComponent implements OnInit {
  private groups: AccordionGroupComponent[] = [];

  constructor() { }

  ngOnInit() {
  }

  addGroup(group: AccordionGroupComponent): void {
    this.groups.push(group);
  }

  removeGroup(group: AccordionGroupComponent): void {
    let idx = this.groups.indexOf(group);
    if (idx > -1) {
      this.groups.splice(idx, 1);
    }
  }

  closeOthers(openedGroup: AccordionGroupComponent): void {
    this.groups.forEach((group: AccordionGroupComponent) => {
      if (openedGroup !== group) {
        group.isOpen = false;
      }
    });
  }

}

@Component({
  selector: 'ux-accordion-group',
  template: `
    <div (click)="toggle($event)">
      <ng-content select="ux-accordion-heading"></ng-content>
    </div>
    <ux-collapse [isCollapsed]="!isOpen">
      <ng-content select="ux-accordion-body"></ng-content>
    </ux-collapse>
  `,
  styles: [':host{display:block;}']
})
class AccordionGroupComponent implements OnInit, AfterViewInit {

  @HostBinding('class.ux-is-open')
  private opened: boolean;

  @HostBinding('class.ux-is-collapsed')
  private get closed() {
    return !this.opened;
  }

  @Input()
  get isOpen() {
    return this.opened;
  }
  set isOpen(value: boolean) {
    this.opened = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }

  constructor(private accordion: AccordionComponent) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => { this.accordion.addGroup(this); });
  }

  toggle(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

}

@Directive({
  selector: 'ux-accordion-heading',
  host: { 'class': 'ux-accordion-heading' }
})
class AccordionHeaderDirective { }

@Directive({
  selector: 'ux-accordion-body',
  host: { 'class': 'ux-accordion-body' }
})
class AccordionBodyDirective { }

export { AccordionComponent, AccordionGroupComponent, AccordionHeaderDirective, AccordionBodyDirective }
