import { Inject, Component, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-import-dialog',
  templateUrl: './import-dialog.component.html',
  styleUrls: ['./import-dialog.component.scss']
})
export class ImportDialogComponent implements OnInit {

  file: FileTicket;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<ImportDialogComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialog.close(this.file);
  }

}
