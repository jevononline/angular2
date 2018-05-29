import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { SuperiorDocument } from '../superior-document';
import { SuperiorDocumentsService } from '../superior-documents.service';

@Component({
  selector: 'app-superior-document-form',
  templateUrl: './superior-document-form.component.html',
  styleUrls: ['./superior-document-form.component.scss']
})
export class SuperiorDocumentFormComponent implements OnInit {

  action = null;
  categoryId: number;
  model = new SuperiorDocument();
  submitting = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private superiorDocumentsService: SuperiorDocumentsService) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {

    if (this.action === 'update' || this.action === 'read') {
      this.superiorDocumentsService.getOneById(this.route.snapshot.params.id).subscribe((data) => {
        this.model = data;
      });
    }
  }

  onSubmit() {
    this.submitting = true;
    this.superiorDocumentsService[this.action](this.model).subscribe(() => {
      this.router.navigate(['../../../'], { relativeTo: this.route });
    }, error => {
      this.submitting = false;
    });
  }

}

