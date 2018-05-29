import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionSolicitedOpinionFormComponent } from './standard-revision-solicited-opinion-form.component';

describe('StandardRevisionSolicitedOpinionFormComponent', () => {
  let component: StandardRevisionSolicitedOpinionFormComponent;
  let fixture: ComponentFixture<StandardRevisionSolicitedOpinionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionSolicitedOpinionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionSolicitedOpinionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
