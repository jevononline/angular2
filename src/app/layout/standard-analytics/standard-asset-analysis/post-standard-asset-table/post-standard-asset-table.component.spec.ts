import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStandardAssetTableComponent } from './post-standard-asset-table.component';

describe('PostStandardAssetTableComponent', () => {
  let component: PostStandardAssetTableComponent;
  let fixture: ComponentFixture<PostStandardAssetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostStandardAssetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostStandardAssetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
