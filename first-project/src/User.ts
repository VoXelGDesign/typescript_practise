import { faker } from '@faker-js/faker';
import { DisplayableOnMap } from "./DisplayableOnMap";


export class User implements DisplayableOnMap {

  private name: string
  private location: {
    lat: number 
    lng: number
  }

  constructor(){

    this.name = faker.person.firstName()

    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }

    }

    public getLocation() {
      return this.location
    }

    getDetails(): string {
      return `User: ${this.name}`
    }
}