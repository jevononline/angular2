import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTableManagerComponent } from './standard-table-manager.component';

describe('StandardTableManagerComponent', () => {
  let component: StandardTableManagerComponent;
  let fixture: ComponentFixture<StandardTableManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardTableManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardTableManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
