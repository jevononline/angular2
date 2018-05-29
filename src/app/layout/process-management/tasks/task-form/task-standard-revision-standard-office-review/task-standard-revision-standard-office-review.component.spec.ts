import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionStandardOfficeReviewComponent } from './task-standard-revision-standard-office-review.component';

describe('TaskStandardRevisionStandardOfficeReviewComponent', () => {
  let component: TaskStandardRevisionStandardOfficeReviewComponent;
  let fixture: ComponentFixture<TaskStandardRevisionStandardOfficeReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionStandardOfficeReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionStandardOfficeReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
