import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUserAssociationComponent } from './role-user-association.component';

describe('RoleUserAssociationComponent', () => {
  let component: RoleUserAssociationComponent;
  let fixture: ComponentFixture<RoleUserAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleUserAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleUserAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
