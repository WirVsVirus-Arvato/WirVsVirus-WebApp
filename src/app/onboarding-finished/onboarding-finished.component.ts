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

  copyToClipboad(item: any) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }
}
