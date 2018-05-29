import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineEditingComponent } from './online-editing.component';

describe('OnlineEditingComponent', () => {
  let component: OnlineEditingComponent;
  let fixture: ComponentFixture<OnlineEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
