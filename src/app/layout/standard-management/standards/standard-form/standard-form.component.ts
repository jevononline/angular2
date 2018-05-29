
import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { MetadataService } from '../../../../core/metadata/metadata.service';
import { TreeviewService } from '../../../../core/treeview/treeview.service';
import { StandardSystem } from '../../../system-management/standard-system/standard-system';
import { Standard } from '../standard';
import { StandardsService } from '../standards.service';
import { StandardLogsService } from '../../../standard-logs/standard-logs.service';


@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent implements OnInit {
  EnterpriseStandard: IdNameValuePair;

  action = null;
  model = new Standard();
  submitting = false;
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private metadataService: MetadataService,
    private treeviewService: TreeviewService,
    private standardsService: StandardsService,
    private standardLogsService: StandardLogsService) {
    this.action = this.route.parent.snapshot.params.form;
    this.EnterpriseStandard = this.metadataService.get('StandardCategories').Enterprise;
  }

  ngOnInit() {
    if (this.treeviewService) {
      this.model.standardSystem = this.treeviewService.activated;
    }

    let id = this.route.snapshot.params.id || 0;
    this.model.id = id;
    if (this.action === 'update' || this.action === 'read') {
      this.standardsService.getOneById(id).subscribe((data) => {
        this.model = data;
      });
      if (this.action === 'read') {
        this.standardLogsService.log(this.model.id, this.metadataService.get('StandardLogEvents').Read.value).subscribe(() => { });
      }
    }

  }

  isStandardCategoryOptionDisabled(item) {
    return item.value === this.EnterpriseStandard.value;
  }

  onView() {
    if (this.action === 'update' || this.action === 'read') {
      this.standardLogsService.log(this.model.id, this.metadataService.get('StandardLogEvents').View.value).subscribe(() => { });
    }
  }


  onSubmit() {
    this.submitting = true;
    this.standardsService[this.action](this.model).subscribe(() => {
      this.back();
    }, (errorResponse: HttpErrorResponse) => {
      this.submitting = false;
      let { status } = errorResponse;
      let message = '操作失败';
      if (status === 409) {
        let { code } = errorResponse.error;
        if (code === 900) {
          message = `操作失败，企业标准不可编辑`;
        }
      }
      this.snackBar.open(message, null, { duration: 3000, extraClasses: ['warn'] });
    });
  }

  back() {
    this.router.navigate(['/standard-management/standards', { view: 0 }]);
  }



}
