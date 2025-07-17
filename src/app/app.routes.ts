import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/rating-card/rating-card').then((c) => c.RatingCard),
  },
  {
    path: 'thanks',
    loadComponent: () =>
      import('./components/thanks-card/thanks-card').then((c) => c.ThanksCard),
  },
];
