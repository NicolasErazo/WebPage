import { Component } from '@angular/core';
import { ScriptsService } from 'src/app/services/scripts.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {
  constructor(private scripts: ScriptsService) {
    scripts.index();
  }
}
