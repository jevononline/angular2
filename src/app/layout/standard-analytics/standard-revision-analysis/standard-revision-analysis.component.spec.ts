import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionAnalysisComponent } from './standard-revision-analysis.component';

describe('StandardRevisionAnalysisComponent', () => {
  let component: StandardRevisionAnalysisComponent;
  let fixture: ComponentFixture<StandardRevisionAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
