export class Theater {
  id: number;
  showTime: string;
  theater: number;
  unavailableSeats: string[];

  constructor(data: any) {
    this.id = data.id;
    this.showTime = data.showTime;
    this.theater = data.theater;
    this.unavailableSeats = data.unavailableSeats;
  }
}
