import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { OnboardingFinishedComponent } from './onboarding-finished/onboarding-finished.component';
import { StatusGoodComponent } from './status-good/status-good.component';
import { StatusNotGoodComponent } from './status-not-good/status-not-good.component';
import { StatusTrackerComponent } from './status-tracker/status-tracker.component';


const appRoutes: Routes = [
  { path: 'welcome', component: LandingPageComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'onboarding-finished', component: OnboardingFinishedComponent },
  { path: 'statustracker', component: StatusTrackerComponent },
  { path: 'status-good', component: StatusGoodComponent },
  { path: 'status-not-good', component: StatusNotGoodComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
