import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingFinishedComponent } from './onboarding-finished.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OnboardingFinishedComponent', () => {
  let component: OnboardingFinishedComponent;
  let fixture: ComponentFixture<OnboardingFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OnboardingFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
