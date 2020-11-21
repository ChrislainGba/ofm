import { HttpClientModule, HttpClient } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatOptionModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatListModule,
  MatDialogModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSliderModule,
  MatRippleModule,
  MatRadioModule,
  MatProgressBarModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatDividerModule,
  MatDatepickerModule,
  MatChipsModule,
  MatCheckboxModule,
} from "@angular/material";
import { LoginComponent } from "./components/login/login.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './components/footer/footer.component';
import { CarousComponent } from './components/carous/carous.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomelieComponent } from './components/homelie/homelie.component';
import { EventComponent } from './components/event/event.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CarouselComponent,
    LoginComponent,
    FooterComponent,
    CarousComponent,
    HeaderComponent,
    ContactComponent,
    HomelieComponent,
    EventComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSliderModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatChipsModule,
    MatCheckboxModule,
    NgxSpinnerModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
