import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardNetworkTreeviewComponent } from './standard-network-treeview.component';

describe('StandardNetworkTreeviewComponent', () => {
  let component: StandardNetworkTreeviewComponent;
  let fixture: ComponentFixture<StandardNetworkTreeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardNetworkTreeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardNetworkTreeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
