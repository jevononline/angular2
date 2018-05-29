import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionReviewComponent } from './task-standard-revision-review.component';

describe('TaskStandardRevisionReviewComponent', () => {
  let component: TaskStandardRevisionReviewComponent;
  let fixture: ComponentFixture<TaskStandardRevisionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
