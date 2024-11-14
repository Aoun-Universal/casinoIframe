import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateOverviewComponent } from './affiliate-overview.component';

describe('AffiliateOverviewComponent', () => {
  let component: AffiliateOverviewComponent;
  let fixture: ComponentFixture<AffiliateOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffiliateOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
