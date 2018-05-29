import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAdoptionManagerComponent } from './standard-adoption-manager.component';

describe('StandardAdoptionManagerComponent', () => {
  let component: StandardAdoptionManagerComponent;
  let fixture: ComponentFixture<StandardAdoptionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAdoptionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAdoptionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
