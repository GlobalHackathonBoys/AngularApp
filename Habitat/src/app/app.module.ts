import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { SortByDatePipe } from './shared/pipes/sort-by-date.pipe';
import { YesterdaysHandoverComponent } from './yesterdays-handover/yesterdays-handover.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaySwitcherComponent } from './day-switcher/day-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    DayPlannerComponent,
    SortByDatePipe,
    YesterdaysHandoverComponent,
    NotesComponent,
    DaySwitcherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
