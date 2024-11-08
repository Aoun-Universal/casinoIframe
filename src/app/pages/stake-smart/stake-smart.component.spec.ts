import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeSmartComponent } from './stake-smart.component';

describe('StakeSmartComponent', () => {
  let component: StakeSmartComponent;
  let fixture: ComponentFixture<StakeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StakeSmartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StakeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
