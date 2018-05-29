import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemStandardCategoryChartComponent } from './standard-system-standard-category-chart.component';

describe('StandardSystemStandardCategoryChartComponent', () => {
  let component: StandardSystemStandardCategoryChartComponent;
  let fixture: ComponentFixture<StandardSystemStandardCategoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemStandardCategoryChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemStandardCategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
