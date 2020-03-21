import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusQuestionnaireComponent } from './status-questionnaire.component';

describe('StatusQuestionnaireComponent', () => {
  let component: StatusQuestionnaireComponent;
  let fixture: ComponentFixture<StatusQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusQuestionnaireComponent ]
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
