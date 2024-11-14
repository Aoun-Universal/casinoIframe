import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsModalTableComponent } from './statistics-modal-table.component';

describe('StatisticsModalTableComponent', () => {
  let component: StatisticsModalTableComponent;
  let fixture: ComponentFixture<StatisticsModalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsModalTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsModalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
