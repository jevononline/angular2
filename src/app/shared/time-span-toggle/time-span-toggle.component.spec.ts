import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpanToggleComponent } from './time-span-toggle.component';

describe('TimeSpanToggleComponent', () => {
  let component: TimeSpanToggleComponent;
  let fixture: ComponentFixture<TimeSpanToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSpanToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSpanToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
