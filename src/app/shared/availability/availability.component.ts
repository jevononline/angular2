import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {

  @Input()
  available: boolean;

  constructor() { }

  ngOnInit() {
  }

}
