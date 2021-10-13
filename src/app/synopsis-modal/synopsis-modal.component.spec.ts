import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisModalComponent } from './synopsis-modal.component';

describe('SynopsisModalComponent', () => {
  let component: SynopsisModalComponent;
  let fixture: ComponentFixture<SynopsisModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsisModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynopsisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
