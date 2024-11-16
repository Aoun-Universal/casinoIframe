import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermotionsComponent } from './permotions.component';

describe('PermotionsComponent', () => {
  let component: PermotionsComponent;
  let fixture: ComponentFixture<PermotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermotionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
