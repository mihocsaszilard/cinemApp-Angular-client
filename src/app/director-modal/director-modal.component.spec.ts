import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorModalComponent } from './director-modal.component';

describe('DirectorModalComponent', () => {
  let component: DirectorModalComponent;
  let fixture: ComponentFixture<DirectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
