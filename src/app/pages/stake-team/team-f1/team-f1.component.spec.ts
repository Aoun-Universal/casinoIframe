import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamF1Component } from './team-f1.component';

describe('TeamF1Component', () => {
  let component: TeamF1Component;
  let fixture: ComponentFixture<TeamF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamF1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
