import { Component } from '@angular/core';
import { RatingCard } from './components/rating-card/rating-card';

@Component({
  selector: 'app-root',
  imports: [RatingCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
