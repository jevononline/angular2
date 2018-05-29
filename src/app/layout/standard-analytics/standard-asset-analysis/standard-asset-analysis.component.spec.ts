import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAssetAnalysisComponent } from './standard-asset-analysis.component';

describe('StandardAssetAnalysisComponent', () => {
  let component: StandardAssetAnalysisComponent;
  let fixture: ComponentFixture<StandardAssetAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAssetAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAssetAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
