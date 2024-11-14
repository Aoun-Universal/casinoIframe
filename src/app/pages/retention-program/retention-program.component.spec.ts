import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionProgramComponent } from './retention-program.component';

describe('RetentionProgramComponent', () => {
  let component: RetentionProgramComponent;
  let fixture: ComponentFixture<RetentionProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetentionProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetentionProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
