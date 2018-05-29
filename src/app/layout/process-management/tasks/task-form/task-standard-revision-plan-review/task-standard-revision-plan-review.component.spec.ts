import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanReviewComponent } from './task-standard-revision-plan-review.component';

describe('TaskStandardRevisionPlanReviewComponent', () => {
  let component: TaskStandardRevisionPlanReviewComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
