import { faker } from '@faker-js/faker';
import { DisplayableOnMap } from "./DisplayableOnMap";



export class Company implements DisplayableOnMap {
  name: string
  location: { 
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

}