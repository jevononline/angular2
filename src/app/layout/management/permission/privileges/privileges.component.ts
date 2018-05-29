import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PrivilegesService } from './privileges.service';

@Component({
  selector: 'app-privileges',
  templateUrl: './privileges.component.html',
  styleUrls: ['./privileges.component.scss']
})
export class PrivilegesComponent implements OnInit {
  file: FileTicket;

  submitting = false;
  constructor(private snackBar: MatSnackBar, private privilegesService: PrivilegesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitting = true;
    this.privilegesService.import(this.file).subscribe(() => {
      this.submitting = false;
      this.snackBar.open('操作成功', null, { duration: 2000 });
    });
  }

}
