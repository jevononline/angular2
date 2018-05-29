import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemTreeviewComponent } from './standard-system-treeview.component';

describe('StandardSystemTreeviewComponent', () => {
  let component: StandardSystemTreeviewComponent;
  let fixture: ComponentFixture<StandardSystemTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
