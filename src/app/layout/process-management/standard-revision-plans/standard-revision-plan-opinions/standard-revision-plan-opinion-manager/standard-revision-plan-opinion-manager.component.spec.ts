import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionPlanOpinionManagerComponent } from './standard-revision-plan-opinion-manager.component';

describe('StandardRevisionPlanOpinionManagerComponent', () => {
  let component: StandardRevisionPlanOpinionManagerComponent;
  let fixture: ComponentFixture<StandardRevisionPlanOpinionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionPlanOpinionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionPlanOpinionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
