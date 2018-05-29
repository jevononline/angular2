import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementWidgetComponent } from './announcement-widget.component';

describe('AnnouncementWidgetComponent', () => {
  let component: AnnouncementWidgetComponent;
  let fixture: ComponentFixture<AnnouncementWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
