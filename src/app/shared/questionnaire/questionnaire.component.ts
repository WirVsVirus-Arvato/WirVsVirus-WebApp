import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './question.model';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questions: Question[] = [
    new Question(1, 'a', 'Blablub 1'),
    new Question(2, 'b', 'Blablub 2'),
    new Question(3, 'c', 'Blablub 3'),
    new Question(3, 'd', 'Blablub 4'),
  ];
  @Output() answers: EventEmitter<any[]> = new EventEmitter<any[]>();

  currentIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  canSubmit(): boolean {
    return true;
  }

  submit() {
    this.answers.emit([]);
  }

  next() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
