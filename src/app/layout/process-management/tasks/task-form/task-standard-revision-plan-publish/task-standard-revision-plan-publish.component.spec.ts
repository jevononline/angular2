import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanPublishComponent } from './task-standard-revision-plan-publish.component';

describe('TaskStandardRevisionPlanPublishComponent', () => {
  let component: TaskStandardRevisionPlanPublishComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
