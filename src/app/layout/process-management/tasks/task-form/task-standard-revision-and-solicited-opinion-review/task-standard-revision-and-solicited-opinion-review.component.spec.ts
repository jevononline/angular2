import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionAndSolicitedOpinionReviewComponent } from './task-standard-revision-and-solicited-opinion-review.component';

describe('TaskStandardRevisionAndSolicitedOpinionReviewComponent', () => {
  let component: TaskStandardRevisionAndSolicitedOpinionReviewComponent;
  let fixture: ComponentFixture<TaskStandardRevisionAndSolicitedOpinionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionAndSolicitedOpinionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionAndSolicitedOpinionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
