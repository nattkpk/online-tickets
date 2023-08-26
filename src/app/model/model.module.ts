import { NgModule } from "@angular/core";
//import { TheaterRepository } from "./theater.repository";
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [
    //TheaterRepository,
    
    { provide: RestDataSource },
  ],
})
export class ModelModule {}
