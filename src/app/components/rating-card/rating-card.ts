import { Component, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { Service } from '../../services/service';
import { Router } from '@angular/router';

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
  private service = inject(Service);
  private router = inject(Router);

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

    console.log(selected);

    this.service.nextStar({
      star: selected.star,
      total: this.vm()!.length,
    });

    this.router.navigateByUrl('/thanks');
  }
}
