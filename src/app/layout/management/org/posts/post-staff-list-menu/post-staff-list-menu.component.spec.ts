import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStaffListMenuComponent } from './post-staff-list-menu.component';

describe('PostStaffListMenuComponent', () => {
  let component: PostStaffListMenuComponent;
  let fixture: ComponentFixture<PostStaffListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostStaffListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStaffListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
