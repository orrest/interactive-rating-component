import { Component, inject } from '@angular/core';
import { Service } from '../../services/service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-thanks-card',
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './thanks-card.html',
  styleUrl: './thanks-card.css',
})
export class ThanksCard {
  private service = inject(Service);

  star$ = this.service.star$;
}
