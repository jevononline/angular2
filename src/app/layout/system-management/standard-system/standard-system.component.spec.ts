import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemComponent } from './standard-system.component';

describe('StandardSystemComponent', () => {
  let component: StandardSystemComponent;
  let fixture: ComponentFixture<StandardSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
