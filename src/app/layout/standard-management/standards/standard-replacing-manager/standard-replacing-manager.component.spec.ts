import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardReplacingManagerComponent } from './standard-replacing-manager.component';

describe('StandardReplacingManagerComponent', () => {
  let component: StandardReplacingManagerComponent;
  let fixture: ComponentFixture<StandardReplacingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardReplacingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardReplacingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
