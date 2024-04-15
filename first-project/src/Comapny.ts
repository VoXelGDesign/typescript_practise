import { faker } from '@faker-js/faker';
import { DisplayableOnMap } from "./DisplayableOnMap";



export class Company implements DisplayableOnMap {
  private name: string
  private location: { 
    lat: number
    lng: number
  }
  catchPharse: string
  constructor(){

    this.name = faker.company.name();

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
    this.catchPharse = faker.company.catchPhrase()
  }
 
  public getLocation() {
    return this.location
  }

  public getDetails(): string {
    return `Company: ${this.name} <br/> ${this.catchPharse}`
  }
}