import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeLeaderFormComponent } from './standard-committee-leader-form.component';

describe('StandardCommitteeLeaderFormComponent', () => {
  let component: StandardCommitteeLeaderFormComponent;
  let fixture: ComponentFixture<StandardCommitteeLeaderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeLeaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeLeaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
