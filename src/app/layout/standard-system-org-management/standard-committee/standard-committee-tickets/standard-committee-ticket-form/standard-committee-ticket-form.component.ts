import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { TreeviewService } from '../../../../../core/treeview/treeview.service';
import { StandardCommittee } from '../../standard-committee';
import { Staff } from '../../../../management/org/staff/staff';
import { SystemOrgTicket } from '../../../../system-orgs/system-org-tickets/system-org-ticket';
import { SystemOrgTicketsService } from '../../../../system-orgs/system-org-tickets/system-org-tickets.service';
import { StandardCommitteeTicketsService } from '../standard-committee-tickets.service';

@Component({
  selector: 'app-standard-committee-ticket-form',
  templateUrl: './standard-committee-ticket-form.component.html',
  styleUrls: ['./standard-committee-ticket-form.component.scss']
})
export class StandardCommitteeTicketFormComponent implements OnInit {

  staffList: Staff[];
  staff: Staff;
  position: string;
  duties: string;

  model = new SystemOrgTicket();
  submitting = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { action: 'create' | 'update', id: number, node: StandardCommittee },
    private dialog: MatDialogRef<StandardCommitteeTicketFormComponent>,
    private snackBar: MatSnackBar,
    @Optional() private treeviewService: TreeviewService,
    private systemOrgTicketsService: SystemOrgTicketsService,
    private standardCommitteeTicketsService: StandardCommitteeTicketsService
  ) { }

  ngOnInit() {
    this.model.systemOrgId = this.data.node.id;
    this.model.content = {};
    if (this.data.action === 'update') {
      this.model.id = this.data.id;

      this.systemOrgTicketsService.getOneById(this.data.id).subscribe((data) => {
        this.model = data;
      });
    } else if (this.data.action === 'create') {

    }
  }

  onSubmit() {
    this.submitting = true;

    this.standardCommitteeTicketsService[this.data.action](this.model).subscribe(() => {
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
          this.snackBar.open(`不能重复添加${errorData.staff.fullName}[${errorData.staff.staffNo}]至${this.data.node.name}！`, null, {
            duration: 3000,
            extraClasses: ['warn']
          });
        }
      }
    });
  }

}

