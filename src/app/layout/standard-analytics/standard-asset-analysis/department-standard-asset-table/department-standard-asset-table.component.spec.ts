import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentStandardAssetTableComponent } from './department-standard-asset-table.component';

describe('DepartmentStandardAssetTableComponent', () => {
  let component: DepartmentStandardAssetTableComponent;
  let fixture: ComponentFixture<DepartmentStandardAssetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentStandardAssetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentStandardAssetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
