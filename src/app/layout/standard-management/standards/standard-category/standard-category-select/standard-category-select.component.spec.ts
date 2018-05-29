import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCategorySelectComponent } from './standard-category-select.component';

describe('StandardCategorySelectComponent', () => {
  let component: StandardCategorySelectComponent;
  let fixture: ComponentFixture<StandardCategorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCategorySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCategorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
