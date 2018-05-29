import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionFormComponent } from './standard-revision-form.component';

describe('StandardRevisionFormComponent', () => {
  let component: StandardRevisionFormComponent;
  let fixture: ComponentFixture<StandardRevisionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
