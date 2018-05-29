import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeTicketsComponent } from './standard-committee-tickets.component';

describe('StandardCommitteeTicketsComponent', () => {
  let component: StandardCommitteeTicketsComponent;
  let fixture: ComponentFixture<StandardCommitteeTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
