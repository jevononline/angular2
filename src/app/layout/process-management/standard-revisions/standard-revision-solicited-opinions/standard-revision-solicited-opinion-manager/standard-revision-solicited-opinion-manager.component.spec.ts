import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionSolicitedOpinionManagerComponent } from './standard-revision-solicited-opinion-manager.component';

describe('StandardRevisionSolicitedOpinionManagerComponent', () => {
  let component: StandardRevisionSolicitedOpinionManagerComponent;
  let fixture: ComponentFixture<StandardRevisionSolicitedOpinionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionSolicitedOpinionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionSolicitedOpinionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
