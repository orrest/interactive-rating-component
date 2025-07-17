import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCard } from './rating-card';

describe('RatingCard', () => {
  let component: RatingCard;
  let fixture: ComponentFixture<RatingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
