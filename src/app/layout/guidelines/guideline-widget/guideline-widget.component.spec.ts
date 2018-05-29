import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineWidgetComponent } from './guideline-widget.component';

describe('GuidelineWidgetComponent', () => {
  let component: GuidelineWidgetComponent;
  let fixture: ComponentFixture<GuidelineWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelineWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelineWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
