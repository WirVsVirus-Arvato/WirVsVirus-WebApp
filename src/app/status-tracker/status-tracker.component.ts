import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.css']
})
export class StatusTrackerComponent implements OnInit {
  quarantineDayActual: number;
  quarantineDayGoal: number;
  city: string;
  messageDanger: string;
  days = Array;
  coronaStatus: number;
  coronaStatusDetails: any;

  constructor() {
    this.quarantineDayActual = 4;
    this.quarantineDayGoal = 20;
    this.city = 'Hamburg';
    this.messageDanger = 'Achtung: Aktuell hohes Risiko!';
    this.coronaStatus = 40;
  }

  ngOnInit(): void {
    if (localStorage.getItem('lastStatusSent')) {
      const lastStatusString: number = +localStorage.getItem('lastStatusSent');
      if ((lastStatusString + (300 * 1000)) > Date.now()) {
        this.coronaStatusDetails = true;
      }
    }
  }
}
