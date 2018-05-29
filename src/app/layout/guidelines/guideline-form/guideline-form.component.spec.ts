import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineFormComponent } from './guideline-form.component';

describe('GuidelineFormComponent', () => {
  let component: GuidelineFormComponent;
  let fixture: ComponentFixture<GuidelineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
