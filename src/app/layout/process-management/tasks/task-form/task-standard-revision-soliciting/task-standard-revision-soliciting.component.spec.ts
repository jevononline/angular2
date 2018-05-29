import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionSolicitingComponent } from './task-standard-revision-soliciting.component';

describe('TaskStandardRevisionSolicitingComponent', () => {
  let component: TaskStandardRevisionSolicitingComponent;
  let fixture: ComponentFixture<TaskStandardRevisionSolicitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionSolicitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionSolicitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
