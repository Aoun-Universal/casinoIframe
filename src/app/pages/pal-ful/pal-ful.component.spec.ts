import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalFulComponent } from './pal-ful.component';

describe('PalFulComponent', () => {
  let component: PalFulComponent;
  let fixture: ComponentFixture<PalFulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalFulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalFulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
