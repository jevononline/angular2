import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCategoryChartComponent } from './standard-category-chart.component';

describe('StandardCategoryChartComponent', () => {
  let component: StandardCategoryChartComponent;
  let fixture: ComponentFixture<StandardCategoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCategoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
