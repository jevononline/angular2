import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineTrendChartComponent } from './guideline-trend-chart.component';

describe('GuidelineTrendChartComponent', () => {
  let component: GuidelineTrendChartComponent;
  let fixture: ComponentFixture<GuidelineTrendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineTrendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
