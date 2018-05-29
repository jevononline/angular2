import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncingComponent } from './announcing.component';

describe('AnnouncingComponent', () => {
  let component: AnnouncingComponent;
  let fixture: ComponentFixture<AnnouncingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
