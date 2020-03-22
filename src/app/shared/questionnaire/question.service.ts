import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Questionnaire, QuestionnaireModel } from './questionnaire.model';
import { Choice, Question } from './question.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  getOnboardingQuestions(): Observable<Questionnaire> {
    return this.http.get<QuestionnaireModel>(`${environment.apiUrl}/questionnaire?id=1`)
      .pipe(
        map(response => {
          const questions = response.questions.map(q => new Question(q.id, q.type, q.title, q.choices.map(c => new Choice(c.id, c.answer))));
          return new Questionnaire(response.id, response.title, questions);
        })
      );
  }
}
