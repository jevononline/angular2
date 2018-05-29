import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUsageAnalysisComponent } from './standard-usage-analysis.component';

describe('StandardUsageAnalysisComponent', () => {
  let component: StandardUsageAnalysisComponent;
  let fixture: ComponentFixture<StandardUsageAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardUsageAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardUsageAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
