import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questionnaire } from './questionnaire.model';
import { MatSelectionListChange } from '@angular/material/list';
import { Answer } from './answer.model';
import { TokenService } from '../token.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire: Questionnaire;
  @Output() answers: EventEmitter<any[]> = new EventEmitter<any[]>();

  currentIndex = 0;
  token: string = undefined;

  constructor(private tokenSrv: TokenService) {
  }

  ngOnInit(): void {
    this.token = this.tokenSrv.getCurrentToken();
  }

  getCurrentQuestion() {
    return this.questionnaire.questions[this.currentIndex];
  }

  canSubmit(): boolean {
    return this.questionnaire.questions.every(q => q.answer !== undefined);
  }

  submit() {
    const answers = this.questionnaire.questions.map(q => q.answer);
    this.answers.emit(answers);
  }

  next() {
    if (this.currentIndex < this.questionnaire.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  multipleChoiceAnswer($event: MatSelectionListChange) {
    const question = this.getCurrentQuestion();

    if ($event.source.selectedOptions.selected.length < 1) {
      question.answer = undefined;
    } else {
      const choiceIds = $event.source.selectedOptions.selected.map(s => s.value);
      question.answer = new Answer(question.id, '', JSON.stringify(choiceIds));
    }
  }

  radioChoiceAnswer($event: MatRadioChange) {
    const question = this.getCurrentQuestion();
    const choice = $event.value;
    question.answer = new Answer(question.id, '', choice);
  }
}
