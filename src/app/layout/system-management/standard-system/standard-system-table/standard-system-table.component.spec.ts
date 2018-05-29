import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSystemTableComponent } from './standard-system-table.component';

describe('StandardSystemTableComponent', () => {
  let component: StandardSystemTableComponent;
  let fixture: ComponentFixture<StandardSystemTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSystemTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSystemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
