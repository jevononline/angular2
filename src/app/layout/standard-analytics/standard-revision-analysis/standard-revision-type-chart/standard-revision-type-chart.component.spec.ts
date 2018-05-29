import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionTypeChartComponent } from './standard-revision-type-chart.component';

describe('StandardRevisionTypeChartComponent', () => {
  let component: StandardRevisionTypeChartComponent;
  let fixture: ComponentFixture<StandardRevisionTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionTypeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
