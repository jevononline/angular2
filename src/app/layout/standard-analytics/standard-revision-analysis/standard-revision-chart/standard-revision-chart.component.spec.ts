import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionChartComponent } from './standard-revision-chart.component';

describe('StandardRevisionChartComponent', () => {
  let component: StandardRevisionChartComponent;
  let fixture: ComponentFixture<StandardRevisionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
