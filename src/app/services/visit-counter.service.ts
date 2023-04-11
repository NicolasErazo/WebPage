import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {

  private visits: number = 0;

  constructor() {
    this.loadVisits();
  }

  getVisits(): number {
    return this.visits;
  }

  incrementVisits(): void {
    this.visits++;
    localStorage.setItem('visits', JSON.stringify(this.visits));
  }

  private loadVisits(): void {
    const storedVisits = localStorage.getItem('visits');
    if (storedVisits) {
      this.visits = JSON.parse(storedVisits);
    }
  }
}
