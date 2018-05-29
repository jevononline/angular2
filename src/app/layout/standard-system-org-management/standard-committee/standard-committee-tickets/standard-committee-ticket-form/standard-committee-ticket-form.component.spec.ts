import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeTicketFormComponent } from './standard-committee-ticket-form.component';

describe('StandardCommitteeTicketFormComponent', () => {
  let component: StandardCommitteeTicketFormComponent;
  let fixture: ComponentFixture<StandardCommitteeTicketFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeTicketFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
