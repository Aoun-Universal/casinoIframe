import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewCampaingComponent } from './create-new-campaing.component';

describe('CreateNewCampaingComponent', () => {
  let component: CreateNewCampaingComponent;
  let fixture: ComponentFixture<CreateNewCampaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewCampaingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewCampaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
