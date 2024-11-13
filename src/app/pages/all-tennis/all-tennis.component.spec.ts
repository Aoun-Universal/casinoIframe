import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTennisComponent } from './all-tennis.component';

describe('AllTennisComponent', () => {
  let component: AllTennisComponent;
  let fixture: ComponentFixture<AllTennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTennisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
