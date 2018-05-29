import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacingDocumentNoManagerComponent } from './replacing-document-no-manager.component';

describe('ReplacingDocumentNoManagerComponent', () => {
  let component: ReplacingDocumentNoManagerComponent;
  let fixture: ComponentFixture<ReplacingDocumentNoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplacingDocumentNoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacingDocumentNoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
