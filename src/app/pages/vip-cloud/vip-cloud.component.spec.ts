import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCloudComponent } from './vip-cloud.component';

describe('VipCloudComponent', () => {
  let component: VipCloudComponent;
  let fixture: ComponentFixture<VipCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipCloudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
