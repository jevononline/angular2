import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeFormComponent } from './standard-committee-form.component';

describe('StandardCommitteeFormComponent', () => {
  let component: StandardCommitteeFormComponent;
  let fixture: ComponentFixture<StandardCommitteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
