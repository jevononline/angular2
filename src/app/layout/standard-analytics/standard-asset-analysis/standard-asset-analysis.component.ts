
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard-asset-analysis',
  templateUrl: './standard-asset-analysis.component.html',
  styleUrls: ['./standard-asset-analysis.component.scss']
})
export class StandardAssetAnalysisComponent implements OnInit {

  standardCategoryDimension: IdNameValuePair;
  standardSystemDimension: IdNameValuePair;
  constructor() { }

  ngOnInit() {

  }

}
