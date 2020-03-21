export class Answer {

  questionId: number;
  peopleId: number;
  content: string;

  constructor(questionId: number, peopleId: number, content: string) {
    this.questionId = questionId;
    this.peopleId = peopleId;
    this.content = content;
  }
}
