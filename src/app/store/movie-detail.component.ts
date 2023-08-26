import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent {
  @Input() movie: any; // You might need to define a proper type for the movie data
}
