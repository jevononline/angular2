import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPlanSetEditorComponent } from './task-standard-revision-plan-set-editor.component';

describe('TaskStandardRevisionPlanSetEditorComponent', () => {
  let component: TaskStandardRevisionPlanSetEditorComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPlanSetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPlanSetEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPlanSetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
