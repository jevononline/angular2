import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStatusSelectComponent } from './staff-status-select.component';

describe('StaffStatusSelectComponent', () => {
  let component: StaffStatusSelectComponent;
  let fixture: ComponentFixture<StaffStatusSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffStatusSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStatusSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
