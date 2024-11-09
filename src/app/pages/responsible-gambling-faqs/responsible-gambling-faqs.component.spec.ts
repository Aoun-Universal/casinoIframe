import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleGamblingFaqsComponent } from './responsible-gambling-faqs.component';

describe('ResponsibleGamblingFaqsComponent', () => {
  let component: ResponsibleGamblingFaqsComponent;
  let fixture: ComponentFixture<ResponsibleGamblingFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibleGamblingFaqsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibleGamblingFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
