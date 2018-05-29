import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeComponent } from './standard-committee.component';

describe('StandardCommitteeComponent', () => {
  let component: StandardCommitteeComponent;
  let fixture: ComponentFixture<StandardCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
