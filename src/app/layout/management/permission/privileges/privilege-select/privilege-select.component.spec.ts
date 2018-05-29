import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeSelectComponent } from './privilege-select.component';

describe('PrivilegeSelectComponent', () => {
  let component: PrivilegeSelectComponent;
  let fixture: ComponentFixture<PrivilegeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
