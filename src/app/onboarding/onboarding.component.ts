import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  currentToken = undefined;

  constructor(private tokenSrv: TokenService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentToken = this.tokenSrv.getCurrentToken();
  }

  submitAnswers(event) {
    this.tokenSrv.obtainAndPersistToken().subscribe(token => {
      this.gotoFinish(token.token);
    });
  }

  gotoFinish(token: string) {
    this.router.navigate(['token', token]);
  }
}
