import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardUsageRankChartComponent } from './standard-usage-rank-chart.component';

describe('StandardUsageRankChartComponent', () => {
  let component: StandardUsageRankChartComponent;
  let fixture: ComponentFixture<StandardUsageRankChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardUsageRankChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardUsageRankChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
