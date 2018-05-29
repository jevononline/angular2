import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { GuidelineCategory } from '../guideline-categories/guideline-category';
import { Guideline } from '../guideline';
import { GuidelinesService } from '../guidelines.service';

@Component({
  selector: 'app-guideline-form',
  templateUrl: './guideline-form.component.html',
  styleUrls: ['./guideline-form.component.scss']
})
export class GuidelineFormComponent implements OnInit {

  action = null;
  model = new Guideline();
  submitting = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private guidelinesService: GuidelinesService
  ) {
    this.action = this.route.parent.snapshot.params.form;
  }

  ngOnInit() {
    if (this.action === 'update' || this.action === 'read') {
      this.guidelinesService.getOneById(this.route.snapshot.params.id).subscribe((data) => {
        this.model = data;
      });
    }
  }

  onSubmit() {
    this.submitting = true;
    this.guidelinesService[this.action](this.model).subscribe(() => {
      this.router.navigate(['../../../'], { relativeTo: this.route });
    }, error => {
      this.submitting = false;
    });
  }

}

