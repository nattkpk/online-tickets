import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RestDataSource {
  theatersUrl: string;
  showsUrl: string;

  constructor(private http: HttpClient) {
    this.theatersUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023/theaters`;
    this.showsUrl = `https://cpsu-test-api.herokuapp.com/api/camt2023/shows`;
  }
  getTheaters(): Observable<any[]> {
    return this.http.get<any[]>(this.theatersUrl);
  }
 
}