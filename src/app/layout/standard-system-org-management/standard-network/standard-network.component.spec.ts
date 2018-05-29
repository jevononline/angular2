import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardNetworkComponent } from './standard-network.component';

describe('StandardNetworkComponent', () => {
  let component: StandardNetworkComponent;
  let fixture: ComponentFixture<StandardNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
