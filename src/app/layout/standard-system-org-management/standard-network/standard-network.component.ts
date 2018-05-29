import { Component, OnInit } from '@angular/core';
import { StandardNetworkService } from './standard-network.service';

@Component({
  selector: 'app-standard-network',
  templateUrl: './standard-network.component.html',
  styleUrls: ['./standard-network.component.scss']
})
export class StandardNetworkComponent implements OnInit {



  isReady = false;

  constructor(private standardNetworkService: StandardNetworkService) {
  }

  ngOnInit() {
  }

  onActivate(event) {
    this.isReady = true;
    this.standardNetworkService.setDepartment(event.data);
  }

}

