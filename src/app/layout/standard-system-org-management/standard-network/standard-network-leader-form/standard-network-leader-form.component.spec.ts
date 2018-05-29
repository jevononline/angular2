import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardNetworkLeaderFormComponent } from './standard-network-leader-form.component';

describe('StandardNetworkLeaderFormComponent', () => {
  let component: StandardNetworkLeaderFormComponent;
  let fixture: ComponentFixture<StandardNetworkLeaderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardNetworkLeaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardNetworkLeaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
