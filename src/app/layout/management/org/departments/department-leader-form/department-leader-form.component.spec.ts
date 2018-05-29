import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentLeaderFormComponent } from './department-leader-form.component';

describe('DepartmentLeaderFormComponent', () => {
  let component: DepartmentLeaderFormComponent;
  let fixture: ComponentFixture<DepartmentLeaderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentLeaderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentLeaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
