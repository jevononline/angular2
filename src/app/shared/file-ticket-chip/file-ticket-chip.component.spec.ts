import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTicketChipComponent } from './file-ticket-chip.component';

describe('FileTicketChipComponent', () => {
  let component: FileTicketChipComponent;
  let fixture: ComponentFixture<FileTicketChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTicketChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTicketChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
