import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { SortByDatePipe } from './shared/pipes/sort-by-date.pipe';
import { YesterdaysHandoverComponent } from './yesterdays-handover/yesterdays-handover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    DayPlannerComponent,
    SortByDatePipe,
    YesterdaysHandoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
