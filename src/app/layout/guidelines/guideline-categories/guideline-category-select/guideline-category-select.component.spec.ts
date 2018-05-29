import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineCategorySelectComponent } from './guideline-category-select.component';

describe('GuidelineCategorySelectComponent', () => {
  let component: GuidelineCategorySelectComponent;
  let fixture: ComponentFixture<GuidelineCategorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineCategorySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineCategorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
