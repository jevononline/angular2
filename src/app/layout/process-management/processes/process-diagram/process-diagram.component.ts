import { Inject, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { ProcessesService } from '../processes.service';

@Component({
  selector: 'app-process-diagram',
  templateUrl: './process-diagram.component.html',
  styleUrls: ['./process-diagram.component.scss']
})
export class ProcessDiagramComponent implements OnInit {

  @ViewChild('diagram')
  diagram: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialog: MatDialogRef<ProcessDiagramComponent>,
    private processesService: ProcessesService
  ) { }

  ngOnInit() {
    this.processesService.getDiagram(this.data).subscribe(data => {

      this.diagram.nativeElement.src = URL.createObjectURL(data);
    });

  }

}
