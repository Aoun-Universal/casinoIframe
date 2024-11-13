import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfExclusionComponent } from './self-exclusion.component';

describe('SelfExclusionComponent', () => {
  let component: SelfExclusionComponent;
  let fixture: ComponentFixture<SelfExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfExclusionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
