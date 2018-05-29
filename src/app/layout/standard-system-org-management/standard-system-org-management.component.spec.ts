import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemOrgManagementComponent } from './standard-system-org-management.component';

describe('StandardSystemOrgManagementComponent', () => {
  let component: StandardSystemOrgManagementComponent;
  let fixture: ComponentFixture<StandardSystemOrgManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemOrgManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemOrgManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
