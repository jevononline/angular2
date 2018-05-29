import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanSetReceivingDepartmentsComponent } from './task-standard-revision-plan-set-receiving-departments.component';

describe('TaskStandardRevisionPlanSetReceivingDepartmentsComponent', () => {
  let component: TaskStandardRevisionPlanSetReceivingDepartmentsComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanSetReceivingDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanSetReceivingDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanSetReceivingDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
