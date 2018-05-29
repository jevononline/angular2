import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemMapForPostComponent } from './system-map-for-post.component';

describe('SystemMapForPostComponent', () => {
  let component: SystemMapForPostComponent;
  let fixture: ComponentFixture<SystemMapForPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemMapForPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemMapForPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
