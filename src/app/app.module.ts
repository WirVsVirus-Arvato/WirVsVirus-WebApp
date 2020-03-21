import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingFinishedComponent } from './onboarding-finished/onboarding-finished.component';
import {StatusTrackerComponent} from "./status-tracker/status-tracker.component";
import { StatusGoodComponent } from './status-good/status-good.component';
import { StatusNotGoodComponent } from './status-not-good/status-not-good.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
