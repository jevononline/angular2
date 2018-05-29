import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionEditComponent } from './task-standard-revision-edit.component';

describe('TaskStandardRevisionEditComponent', () => {
  let component: TaskStandardRevisionEditComponent;
  let fixture: ComponentFixture<TaskStandardRevisionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
