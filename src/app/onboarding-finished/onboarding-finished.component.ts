import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-finished',
  templateUrl: './onboarding-finished.component.html',
  styleUrls: ['./onboarding-finished.component.css']
})
export class OnboardingFinishedComponent implements OnInit {
  userID: string;

  constructor() {
    this.userID = 'GB7-WC4';
  }

  ngOnInit(): void {
  }

}
