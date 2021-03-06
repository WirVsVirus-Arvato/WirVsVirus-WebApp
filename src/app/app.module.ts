import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OnboardingComponent} from './onboarding/onboarding.component';
import {OnboardingFinishedComponent} from './onboarding-finished/onboarding-finished.component';
import {StatusTrackerComponent} from './status-tracker/status-tracker.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {StatusQuestionnaireComponent} from './status-questionnaire/status-questionnaire.component';
import {AppRoutingModule} from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {registerLocaleData} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {QuestionnaireComponent} from './shared/questionnaire/questionnaire.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {environment} from '../environments/environment';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

registerLocaleData(localeEn, 'en-GB');
registerLocaleData(localeDe, 'de-DE');

const initApp = () => {
  return () => {
    return from(
      fetch('assets/config/environment.json').then(function(response) {
        return response.json();
      })
    ).pipe(
      map((config) => {
        console.log(config);
        environment.production = config.production;
        environment.apiUrl = config.apiUrl;
      })).toPromise();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    OnboardingFinishedComponent,
    LandingPageComponent,
    StatusTrackerComponent,
    StatusQuestionnaireComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCardModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
