import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsMarketsComponent } from './sports-markets.component';

describe('SportsMarketsComponent', () => {
  let component: SportsMarketsComponent;
  let fixture: ComponentFixture<SportsMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsMarketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
