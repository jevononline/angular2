import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemFormComponent } from './standard-system-form.component';

describe('StandardSystemFormComponent', () => {
  let component: StandardSystemFormComponent;
  let fixture: ComponentFixture<StandardSystemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
