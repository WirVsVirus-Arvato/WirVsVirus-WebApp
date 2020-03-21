import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-onboarding-finished',
  templateUrl: './onboarding-finished.component.html',
  styleUrls: ['./onboarding-finished.component.css']
})
export class OnboardingFinishedComponent implements OnInit {

  userID$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userID$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of((params.get('token')));
      })
    );
  }

}
