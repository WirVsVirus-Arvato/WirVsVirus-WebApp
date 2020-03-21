import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusQuestionnaireComponent } from './status-questionnaire.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('StatusQuestionnaireComponent', () => {
  let component: StatusQuestionnaireComponent;
  let fixture: ComponentFixture<StatusQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusQuestionnaireComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
