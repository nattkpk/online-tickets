import { ModelModule } from '../model/model.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { MovieDetailComponent } from './movie-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule,
    StoreModule ],
  declarations: [
    FooterComponent,
   MovieDetailComponent,
  ],
  exports: [
    FooterComponent,
   MovieDetailComponent,
  ],
})
export class StoreModule {}
