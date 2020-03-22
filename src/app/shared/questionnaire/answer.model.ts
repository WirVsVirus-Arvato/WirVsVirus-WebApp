export class Answer {

  questionId: number;
  token: string;
  content: string[];

  constructor(questionId: number, token: string, content: string[]) {
    this.questionId = questionId;
    this.token = token;
    this.content = content;
  }
}
