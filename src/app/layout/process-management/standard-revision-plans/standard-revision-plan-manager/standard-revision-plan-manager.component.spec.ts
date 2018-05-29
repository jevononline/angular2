import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionPlanManagerComponent } from './standard-revision-plan-manager.component';

describe('StandardRevisionPlanManagerComponent', () => {
  let component: StandardRevisionPlanManagerComponent;
  let fixture: ComponentFixture<StandardRevisionPlanManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionPlanManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionPlanManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
