import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSelectComponent } from './standard-select.component';

describe('StandardSelectComponent', () => {
  let component: StandardSelectComponent;
  let fixture: ComponentFixture<StandardSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
