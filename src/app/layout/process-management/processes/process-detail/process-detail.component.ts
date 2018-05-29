import { Inject, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { ProcessesService } from '../processes.service';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss']
})

export class ProcessDetailComponent implements OnInit {

  processInstanceId : string;
  router : Router;
  processList : any;

  constructor(
    private processesService: ProcessesService,
    private route: ActivatedRoute,
  ) {
    this.processInstanceId = this.route.snapshot.params.processInstanceId;
  }

  ngOnInit() {
    this.processesService.getDetail(this.processInstanceId).subscribe(result => {
      this.processList = result;
    });
  }

}