import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TokenService } from '../shared/token.service';
import { QuestionService } from '../shared/questionnaire/question.service';
import { Questionnaire } from '../shared/questionnaire/questionnaire.model';
import { Answer } from '../shared/questionnaire/answer.model';

@Component({
  selector: 'app-status-questionnaire',
  templateUrl: './status-questionnaire.component.html',
  styleUrls: ['./status-questionnaire.component.css']
})
export class StatusQuestionnaireComponent implements OnInit {

  currentToken = undefined;
  questionnaire: Questionnaire;
  feelsBadMan$: Observable<boolean> = of(false);

  constructor(private route: ActivatedRoute, private tokenSrv: TokenService, private questionSrv: QuestionService) {
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

  async submitAnswers(answers: Answer[]) {
    answers.forEach(answer => answer.token = this.currentToken);
    await this.questionSrv.sendAnswers(answers);
  }
}
