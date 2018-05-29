import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpanSelectComponent } from './time-span-select.component';

describe('TimeSpanSelectComponent', () => {
  let component: TimeSpanSelectComponent;
  let fixture: ComponentFixture<TimeSpanSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSpanSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSpanSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
