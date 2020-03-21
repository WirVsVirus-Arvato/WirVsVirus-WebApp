import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingFinishedComponent } from './onboarding-finished/onboarding-finished.component';
import { StatusTrackerComponent } from "./status-tracker/status-tracker.component";
import { StatusGoodComponent } from './status-good/status-good.component';
import { StatusNotGoodComponent } from './status-not-good/status-not-good.component';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import localeEn from '@angular/common/locales/en';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEn, 'en-GB');
registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    OnboardingFinishedComponent,
    StatusTrackerComponent,
    StatusGoodComponent,
    StatusNotGoodComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
