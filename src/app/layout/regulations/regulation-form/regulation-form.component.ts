import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Regulation } from '../regulation';
import { RegulationsService } from '../regulations.service';

@Component({
  selector: 'app-regulation-form',
  templateUrl: './regulation-form.component.html',
  styleUrls: ['./regulation-form.component.scss']
})
export class RegulationFormComponent implements OnInit {

  action = null;
  categoryId: number;
  model = new Regulation();
  submitting = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private regulationsService: RegulationsService) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {

    if (this.action === 'update' || this.action === 'read') {
      this.regulationsService.getOneById(this.route.snapshot.params.id).subscribe((data) => {
        this.model = data;
      });
    }
  }

  onSubmit() {
    this.submitting = true;
    this.regulationsService[this.action](this.model).subscribe(() => {
      this.router.navigate(['../../../'], { relativeTo: this.route });
    }, error => {
      this.submitting = false;
    });
  }

}


