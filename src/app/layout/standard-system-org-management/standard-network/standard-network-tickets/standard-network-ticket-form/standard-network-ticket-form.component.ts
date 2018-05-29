import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { TreeviewService } from '../../../../../core/treeview/treeview.service';
import { Department } from '../../../../management/org/departments/department';
import { Staff } from '../../../../management/org/staff/staff';
import { SystemOrgTicket } from '../../../../system-orgs/system-org-tickets/system-org-ticket';
import { StandardNetworkTicketsService } from '../standard-network-tickets.service';

@Component({
  selector: 'app-standard-network-ticket-form',
  templateUrl: './standard-network-ticket-form.component.html',
  styleUrls: ['./standard-network-ticket-form.component.scss']
})
export class StandardNetworkTicketFormComponent implements OnInit {

  staffList: Staff[];

  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Department,
    private dialog: MatDialogRef<StandardNetworkTicketFormComponent>,
    private snackBar: MatSnackBar,
    @Optional() private treeviewService: TreeviewService,
    private standardNetworkTicketsService: StandardNetworkTicketsService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.submitting = true;
    let tickets: SystemOrgTicket[] = [];
    this.staffList.forEach(item => {
      tickets.push({
        systemOrgId: this.data.id,
        staff: { id: item.id, staffNo: item.staffNo, fullName: item.fullName }
      } as SystemOrgTicket);
    });
    this.standardNetworkTicketsService.createMany(tickets).subscribe(() => {
      this.submitting = false;
      if (this.treeviewService) {
        this.treeviewService.refresh();
      }
      this.dialog.close(true);
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      if (status === 409) {
        let { code, errorData } = errorResponse.error;
        if (code === 901) {
          this.snackBar.open(`不能重复添加${errorData.staff.fullName}[${errorData.staff.staffNo}]至${this.data.name}！`, null, {
            duration: 3000,
            extraClasses: ['warn']
          });
        }
      }
    });
  }

}
