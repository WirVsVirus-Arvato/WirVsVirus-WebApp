export class Answer {

  questionId: number;
  token: string;
  content: string | number[];

  constructor(questionId: number, token: string, content: string | number[]) {
    this.questionId = questionId;
    this.token = token;
    this.content = content;
  }
}
