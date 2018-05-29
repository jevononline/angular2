import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpanLevelSelectComponent } from './time-span-level-select.component';

describe('TimeSpanLevelSelectComponent', () => {
  let component: TimeSpanLevelSelectComponent;
  let fixture: ComponentFixture<TimeSpanLevelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSpanLevelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSpanLevelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
