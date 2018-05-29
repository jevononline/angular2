import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStandardRevisionPublishComponent } from './task-standard-revision-publish.component';

describe('TaskStandardRevisionPublishComponent', () => {
  let component: TaskStandardRevisionPublishComponent;
  let fixture: ComponentFixture<TaskStandardRevisionPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStandardRevisionPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStandardRevisionPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
