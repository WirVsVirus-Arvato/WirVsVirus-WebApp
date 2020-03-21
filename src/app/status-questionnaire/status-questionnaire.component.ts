import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-status-questionnaire',
  templateUrl: './status-questionnaire.component.html',
  styleUrls: ['./status-questionnaire.component.css']
})
export class StatusQuestionnaireComponent implements OnInit {

  feelsBadMan$: Observable<boolean> = of(false);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.feelsBadMan$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of((params.get('status') === 'bad'));
      })
    );
  }

}
