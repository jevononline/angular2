import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUsageChartComponent } from './standard-usage-chart.component';

describe('StandardUsageChartComponent', () => {
  let component: StandardUsageChartComponent;
  let fixture: ComponentFixture<StandardUsageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardUsageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardUsageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
