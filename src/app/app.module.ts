import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingFinishedComponent } from './onboarding-finished/onboarding-finished.component';
import { StatusTrackerComponent } from './status-tracker/status-tracker.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StatusQuestionnaireComponent } from './status-questionnaire/status-questionnaire.component';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

registerLocaleData(localeEn, 'en-GB');
registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    OnboardingFinishedComponent,
    LandingPageComponent,
    StatusTrackerComponent,
    StatusQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
