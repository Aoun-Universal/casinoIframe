import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupWalletComponent } from './setup-wallet.component';

describe('SetupWalletComponent', () => {
  let component: SetupWalletComponent;
  let fixture: ComponentFixture<SetupWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupWalletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
