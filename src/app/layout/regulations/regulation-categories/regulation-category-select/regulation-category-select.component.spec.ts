import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationCategorySelectComponent } from './regulation-category-select.component';

describe('RegulationCategorySelectComponent', () => {
  let component: RegulationCategorySelectComponent;
  let fixture: ComponentFixture<RegulationCategorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationCategorySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationCategorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
