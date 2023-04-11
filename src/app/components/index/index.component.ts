import { Component } from '@angular/core';
import { VisitCounterService } from 'src/app/services/visit-counter.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  visits: number;

  constructor(private visitCounterService: VisitCounterService) {
    this.visits = visitCounterService.getVisits();
    visitCounterService.incrementVisits();
  }
  
}
