import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeOfferComponent } from './stake-offer.component';

describe('StakeOfferComponent', () => {
  let component: StakeOfferComponent;
  let fixture: ComponentFixture<StakeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
