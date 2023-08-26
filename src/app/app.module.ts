import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './store/home.component';
import { BookingComponent } from './store/booking.component';
import { MovieDetailComponent } from './store/movie-detail.component';
import {FooterComponent} from './store/footer.component';

const routes: Routes = [
  { path: 'show', component: BookingComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    MovieDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
