import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardAdoptionLevelSelectComponent } from './standard-adoption-level-select.component';

describe('StandardAdoptionLevelSelectComponent', () => {
  let component: StandardAdoptionLevelSelectComponent;
  let fixture: ComponentFixture<StandardAdoptionLevelSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardAdoptionLevelSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardAdoptionLevelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
