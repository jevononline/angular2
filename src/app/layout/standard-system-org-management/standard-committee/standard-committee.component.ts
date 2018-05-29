import { Component, OnInit } from '@angular/core';
import { StandardCommitteeService } from './standard-committee.service';

@Component({
  selector: 'app-standard-committee',
  templateUrl: './standard-committee.component.html',
  styleUrls: ['./standard-committee.component.scss']
})
export class StandardCommitteeComponent implements OnInit {



  isReady = false;

  constructor(private standardCommitteeService: StandardCommitteeService) {
  }

  ngOnInit() {
  }

  onActivate(event) {
    this.isReady = true;
    this.standardCommitteeService.setStandardCommittee(event.data);
  }

}
