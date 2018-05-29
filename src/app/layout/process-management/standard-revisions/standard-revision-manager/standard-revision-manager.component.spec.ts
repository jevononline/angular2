import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionManagerComponent } from './standard-revision-manager.component';

describe('StandardRevisionManagerComponent', () => {
  let component: StandardRevisionManagerComponent;
  let fixture: ComponentFixture<StandardRevisionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
