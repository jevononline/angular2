import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionPlanOpinionFormComponent } from './standard-revision-plan-opinion-form.component';

describe('StandardRevisionPlanOpinionFormComponent', () => {
  let component: StandardRevisionPlanOpinionFormComponent;
  let fixture: ComponentFixture<StandardRevisionPlanOpinionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionPlanOpinionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionPlanOpinionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
