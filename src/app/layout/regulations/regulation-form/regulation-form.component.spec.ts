import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulationFormComponent } from './regulation-form.component';

describe('RegulationFormComponent', () => {
  let component: RegulationFormComponent;
  let fixture: ComponentFixture<RegulationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
