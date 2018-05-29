import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAdvancedFilterComponent } from './standard-advanced-filter.component';

describe('StandardAdvancedFilterComponent', () => {
  let component: StandardAdvancedFilterComponent;
  let fixture: ComponentFixture<StandardAdvancedFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAdvancedFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAdvancedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
