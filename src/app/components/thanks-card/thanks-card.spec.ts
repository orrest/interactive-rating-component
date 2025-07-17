import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksCard } from './thanks-card';

describe('ThanksCard', () => {
  let component: ThanksCard;
  let fixture: ComponentFixture<ThanksCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
