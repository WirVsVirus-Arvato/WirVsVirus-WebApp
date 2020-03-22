import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TokenService } from '../shared/token.service';
import { QuestionService } from '../shared/questionnaire/question.service';
import { Questionnaire } from '../shared/questionnaire/questionnaire.model';
import { Answer } from '../shared/questionnaire/answer.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-status-questionnaire',
  templateUrl: './status-questionnaire.component.html',
  styleUrls: ['./status-questionnaire.component.css']
})
export class StatusQuestionnaireComponent implements OnInit {

  currentToken = undefined;
  questionnaire: Questionnaire;
  feelsBadMan$: Observable<boolean> = of(false);

  constructor(private route: ActivatedRoute, private router: Router, private tokenSrv: TokenService, private questionSrv: QuestionService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.feelsBadMan$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of((params.get('status') === 'bad'));
      })
    );

    this.currentToken = this.tokenSrv.getCurrentToken();
    this.questionSrv.getStatusQuestions().subscribe(q => {
      this.questionnaire = q;
    });
  }

  submitAnswers(answers: Answer[]) {
    answers.forEach(answer => answer.token = this.currentToken);
    this.questionSrv.sendAnswers(answers).subscribe(() => {
      this.snackBar.open('Antworten wurden übermittelt!');
      this.router.navigate(['statustracker']);
      localStorage.setItem('lastStatusSent', Date.now().toString());
    });
  }
}
