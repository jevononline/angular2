import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeTagSelectComponent } from './standard-committee-tag-select.component';

describe('StandardCommitteeTagSelectComponent', () => {
  let component: StandardCommitteeTagSelectComponent;
  let fixture: ComponentFixture<StandardCommitteeTagSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeTagSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeTagSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
