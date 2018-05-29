import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAnalyticsComponent } from './standard-analytics.component';

describe('StandardAnalyticsComponent', () => {
  let component: StandardAnalyticsComponent;
  let fixture: ComponentFixture<StandardAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
