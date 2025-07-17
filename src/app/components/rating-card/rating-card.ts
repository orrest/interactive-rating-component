import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface RatingVm {
  star: number;
  selected: boolean;
}

@Component({
  selector: 'app-rating-card',
  imports: [NgClass],
  templateUrl: './rating-card.html',
  styleUrl: './rating-card.css',
})
export class RatingCard {
  vm = signal<RatingVm[] | undefined>(undefined);
  selectedStar = computed(() => this.vm()!.find((v) => v.selected));

  constructor() {
    const ratings: RatingVm[] = [];

    for (let i = 1; i <= 5; i++) {
      ratings.push({
        star: i,
        selected: false,
      });
    }

    this.vm.set(ratings);
  }

  onRatingClick(rating: RatingVm) {
    const a = this.vm()![rating.star - 1];
    this.vm.update((old) => {
      return old?.map((r) => {
        if (r.star === rating.star) {
          return {
            ...r,
            selected: true,
          };
        } else {
          return {
            ...r,
            selected: false,
          };
        }
      });
    });
  }

  submit() {
    const selected = this.selectedStar();
    if (!selected) {
      return;
    }
  }
}
