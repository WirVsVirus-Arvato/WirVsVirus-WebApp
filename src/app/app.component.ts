import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wirvsvirus-webapp';
  quarantineDayActual: number;
  quarantineDayGoal: number;
}
