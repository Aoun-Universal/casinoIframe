import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingMarketDetailsComponent } from './racing-market-details.component';

describe('RacingMarketDetailsComponent', () => {
  let component: RacingMarketDetailsComponent;
  let fixture: ComponentFixture<RacingMarketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacingMarketDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacingMarketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
