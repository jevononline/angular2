import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperiorDocumentFormComponent } from './superior-document-form.component';

describe('SuperiorDocumentFormComponent', () => {
  let component: SuperiorDocumentFormComponent;
  let fixture: ComponentFixture<SuperiorDocumentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperiorDocumentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperiorDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
