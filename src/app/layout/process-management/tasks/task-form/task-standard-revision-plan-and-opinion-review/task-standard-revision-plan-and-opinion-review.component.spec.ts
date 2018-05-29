import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanAndOpinionReviewComponent } from './task-standard-revision-plan-and-opinion-review.component';

describe('TaskStandardRevisionPlanAndOpinionReviewComponent', () => {
  let component: TaskStandardRevisionPlanAndOpinionReviewComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanAndOpinionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanAndOpinionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanAndOpinionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
