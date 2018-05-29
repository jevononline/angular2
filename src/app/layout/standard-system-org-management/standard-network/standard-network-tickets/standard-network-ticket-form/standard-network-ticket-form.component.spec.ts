import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardNetworkTicketFormComponent } from './standard-network-ticket-form.component';

describe('StandardNetworkTicketFormComponent', () => {
  let component: StandardNetworkTicketFormComponent;
  let fixture: ComponentFixture<StandardNetworkTicketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardNetworkTicketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardNetworkTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
