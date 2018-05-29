import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAssetChartComponent } from './standard-asset-chart.component';

describe('StandardAssetChartComponent', () => {
  let component: StandardAssetChartComponent;
  let fixture: ComponentFixture<StandardAssetChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAssetChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAssetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
