import { Answer } from './answer.model';
import { Question, QuestionModel } from './question.model';

export interface QuestionnaireModel {
  id: number;
  title: string;
  questions: QuestionModel[];
}

export class Questionnaire {

  id: number;
  title: string;
  questions: Question[];

  constructor(id: number, title: string, questions: Question[]) {
    this.id = id;
    this.title = title;
    this.questions = questions;
  }
}
