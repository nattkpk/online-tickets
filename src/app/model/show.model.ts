export class Show {
  constructor(
    public id: number,
    public showTime: string,
    public theater: number,
    public unavailableSeats: string[]
  ) {}
}
