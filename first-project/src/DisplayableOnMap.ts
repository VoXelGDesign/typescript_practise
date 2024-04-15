export interface DisplayableOnMap{
  getLocation() : {
    lat: number 
    lng: number
  }
  getDetails(): string
}