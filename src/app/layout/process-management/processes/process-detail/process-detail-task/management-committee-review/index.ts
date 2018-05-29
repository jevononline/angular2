import { Component, OnInit } from '@angular/core';
import { TechnicalCommitteeReview } from '../technical-committee-review';

@Component({
  selector: 'process-management-committee-review',
  templateUrl: './index.html',
  styleUrls: ['../../process-detail.component.scss']
})

export class ManagementCommitteeReview extends TechnicalCommitteeReview {

  constructor() {
    super();
  }

}