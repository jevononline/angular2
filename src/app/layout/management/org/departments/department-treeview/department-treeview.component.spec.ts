import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTreeviewComponent } from './department-treeview.component';

describe('DepartmentTreeviewComponent', () => {
  let component: DepartmentTreeviewComponent;
  let fixture: ComponentFixture<DepartmentTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
