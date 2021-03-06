import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionSelectComponent } from './dimension-select.component';

describe('DimensionSelectComponent', () => {
  let component: DimensionSelectComponent;
  let fixture: ComponentFixture<DimensionSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
