import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDoneTableComponent } from './task-done-table.component';

describe('TaskDoneTableComponent', () => {
  let component: TaskDoneTableComponent;
  let fixture: ComponentFixture<TaskDoneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDoneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
