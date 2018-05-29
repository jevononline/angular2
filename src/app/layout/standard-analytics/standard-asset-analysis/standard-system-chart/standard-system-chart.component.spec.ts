import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemChartComponent } from './standard-system-chart.component';

describe('StandardSystemChartComponent', () => {
  let component: StandardSystemChartComponent;
  let fixture: ComponentFixture<StandardSystemChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
