import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

export interface Star {
  star: number;
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  private star = new BehaviorSubject<Star>({
    star: 0,
    total: 0,
  });

  public star$ = this.star.asObservable().pipe(tap((v) => console.log(v)));

  nextStar(star: Star) {
    this.star.next(star);
  }
}
