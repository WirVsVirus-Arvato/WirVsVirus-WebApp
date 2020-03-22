import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';
import { QuestionService } from '../shared/questionnaire/question.service';
import { Questionnaire } from '../shared/questionnaire/questionnaire.model';
import { Answer } from '../shared/questionnaire/answer.model';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  currentToken = undefined;
  questionnaire: Questionnaire;

  constructor(private tokenSrv: TokenService, private questionSrv: QuestionService, private router: Router) {
  }

  ngOnInit(): void {
    this.currentToken = this.tokenSrv.getCurrentToken();
    this.questionSrv.getOnboardingQuestions().subscribe(q => {
      this.questionnaire = q;
    });
  }

  submitAnswers(answers: Answer[]) {
    this.tokenSrv.obtainAndPersistToken().subscribe(async token => {
      answers.forEach(answer => answer.token = token.token);
      this.questionSrv.sendAnswers(answers).subscribe();
      this.gotoFinish(token.token);
    });
  }

  gotoFinish(token: string) {
    this.router.navigate(['token', token]);
  }
}
