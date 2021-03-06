import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskWidgetComponent } from './task-widget.component';

describe('TaskWidgetComponent', () => {
  let component: TaskWidgetComponent;
  let fixture: ComponentFixture<TaskWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
