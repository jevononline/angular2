import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardCommitteeTreeviewComponent } from './standard-committee-treeview.component';

describe('StandardCommitteeTreeviewComponent', () => {
  let component: StandardCommitteeTreeviewComponent;
  let fixture: ComponentFixture<StandardCommitteeTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardCommitteeTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardCommitteeTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
