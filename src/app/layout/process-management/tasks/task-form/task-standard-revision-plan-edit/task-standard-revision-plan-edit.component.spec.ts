import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanEditComponent } from './task-standard-revision-plan-edit.component';

describe('TaskStandardRevisionPlanEditComponent', () => {
  let component: TaskStandardRevisionPlanEditComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
