import { Injectable } from '@angular/core';
import { Theater } from './theater.model'; // Adjust the import path
import { RestDataSource } from './rest.datasource'; // Adjust the import path

@Injectable()
export class TheaterRepository {
  private theaters: Theater[] = []; // Array to store theaters

  constructor(private dataSource: RestDataSource) {
    this.initTheaters();
  }

  private initTheaters() {
    this.dataSource.getTheaters()
      .subscribe(data => {
        this.theaters = data.map(theaterData => new Theater(theaterData));
      });
  }

  getAllTheaters(): Theater[] {
    return this.theaters;
  }

  getTheaterById(id: number): Theater | undefined {
    return this.theaters.find(theater => theater.id === id);
  }
}
