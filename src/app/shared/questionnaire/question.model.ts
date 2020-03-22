import { Answer } from './answer.model';

export interface ChoiceModel {
  id: number;
  answer: string;
}

export interface QuestionModel {
  id: number;
  type: string;
  title: string;
  choices: Choice[];
}

export class Choice {
  id: number;
  answer: string;

  constructor(id: number, answer: string) {
    this.id = id;
    this.answer = answer;
  }
}

export class Question {

  id: number;
  type: string;
  title: string;
  answer: Answer;
  choices: Choice[];

  constructor(id: number, type: string, title: string, choices: Choice[]) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.choices = choices;
    this.answer = undefined;
  }
}
