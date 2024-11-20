import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetsModalComponent } from './bets-modal.component';

describe('BetsModalComponent', () => {
  let component: BetsModalComponent;
  let fixture: ComponentFixture<BetsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
