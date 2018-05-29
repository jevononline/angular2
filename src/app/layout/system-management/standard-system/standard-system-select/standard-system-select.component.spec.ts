import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemSelectComponent } from './standard-system-select.component';

describe('StandardSystemSelectComponent', () => {
  let component: StandardSystemSelectComponent;
  let fixture: ComponentFixture<StandardSystemSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
