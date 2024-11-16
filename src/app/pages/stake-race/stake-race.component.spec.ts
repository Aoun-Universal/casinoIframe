import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeRaceComponent } from './stake-race.component';

describe('StakeRaceComponent', () => {
  let component: StakeRaceComponent;
  let fixture: ComponentFixture<StakeRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeRaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
