import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorDocumentsComponent } from './superior-documents.component';

describe('SuperiorDocumentsComponent', () => {
  let component: SuperiorDocumentsComponent;
  let fixture: ComponentFixture<SuperiorDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperiorDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
