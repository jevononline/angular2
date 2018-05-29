import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSpecialCommitteeSelectComponent } from './standard-special-committee-select.component';

describe('StandardSpecialCommitteeSelectComponent', () => {
  let component: StandardSpecialCommitteeSelectComponent;
  let fixture: ComponentFixture<StandardSpecialCommitteeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSpecialCommitteeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSpecialCommitteeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
