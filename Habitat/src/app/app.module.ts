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
import { NewsComponent } from './news/news.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsService } from './shared/services/news/news.service';
import { ImagesComponent } from './images/images.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

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
    NewsComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    SlideshowModule,
    NgbModule
  ],
  providers: [HttpClient, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
