import { Answer } from './answer.model';

export class Question {

  id: number;
  type: string;
  title: string;
  answer: Answer;

  constructor(id: number, type: string, title: string) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.answer = new Answer(id, 123, undefined);
  }
}
