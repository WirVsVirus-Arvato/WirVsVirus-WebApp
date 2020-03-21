import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  submitAnswers(event) {
    this.http.post(`${environment.apiUrl}/people`, {}).subscribe(token => {
      this.router.navigate(['onboarding-finished', token]);
    });
  }

}
