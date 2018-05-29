import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineLatestComponent } from './guideline-latest.component';

describe('GuidelineLatestComponent', () => {
  let component: GuidelineLatestComponent;
  let fixture: ComponentFixture<GuidelineLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
