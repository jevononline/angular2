import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardNetworkTicketsComponent } from './standard-network-tickets.component';

describe('StandardNetworkTicketsComponent', () => {
  let component: StandardNetworkTicketsComponent;
  let fixture: ComponentFixture<StandardNetworkTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardNetworkTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardNetworkTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
