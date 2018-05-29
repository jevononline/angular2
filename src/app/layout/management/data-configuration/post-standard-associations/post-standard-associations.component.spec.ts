import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStandardAssociationsComponent } from './post-standard-associations.component';

describe('PostStandardAssociationsComponent', () => {
  let component: PostStandardAssociationsComponent;
  let fixture: ComponentFixture<PostStandardAssociationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostStandardAssociationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStandardAssociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
