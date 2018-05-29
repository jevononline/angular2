import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardRevisionOpinionTableComponent } from './standard-revision-opinion-table.component';

describe('StandardRevisionOpinionTableComponent', () => {
  let component: StandardRevisionOpinionTableComponent;
  let fixture: ComponentFixture<StandardRevisionOpinionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardRevisionOpinionTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardRevisionOpinionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
