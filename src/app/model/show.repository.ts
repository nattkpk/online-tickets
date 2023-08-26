import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Show } from './show.model'; // Adjust the import path

@Injectable()
export class ShowRepository {
  private shows: Show[] = []; // Populate this array with show data

  constructor() {
    // Initialize shows with data from the provided JSON
    const jsonData: Show[] = [
      // ... (Your provided JSON data here)
      // You can copy and paste your JSON data here
    ];

    this.initializeShows(jsonData);
  }

  private initializeShows(showData: Show[]): void {
    this.shows = showData;
  }

  getAllShows(): Show[] {
    return this.shows;
  }

  getShowsByTheater(theaterId: number): Show[] {
    return this.shows.filter(show => show.theater === theaterId);
  }
}
