import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-ticket-chip',
  templateUrl: './file-ticket-chip.component.html',
  styleUrls: ['./file-ticket-chip.component.scss']
})
export class FileTicketChipComponent implements OnInit {


  @Input()
  fileTicket: any;

  @Output()
  view = new EventEmitter();

  icons = [
    { iconName: 'fa-file', ext: '*' },
    { iconName: 'fa-file-excel', ext: 'excel' },
    { iconName: 'fa-file-word', ext: 'word' },
    { iconName: 'fa-file-powerpoint', ext: 'powerpoint' },
    { iconName: 'fa-file-pdf', ext: 'pdf' }
  ];

  constructor() { }

  ngOnInit() {

  }

  get ext() {
    if (!this.fileTicket) {
      return '*';
    }
    let ext = this.fileTicket.filename.substring(this.fileTicket.filename.lastIndexOf('.')).toLowerCase();
    if (/xlsx|xls|csv/.test(ext)) {
      return 'excel';
    } else if (/docx|doc/.test(ext)) {
      return 'word';
    } else if (/pptx|ppt/.test(ext)) {
      return 'powerpoint';
    } else if (/pdf/.test(ext)) {
      return 'pdf';
    } else {
      return '*';
    }
  }

  viewFile() {
    if (this.ext === 'pdf') {
      window.open(`/file-viewer/${this.fileTicket.ticket}`);
      this.view.emit();
    }
  }

}
