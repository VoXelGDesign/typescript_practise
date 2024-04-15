import { DisplayableOnMap } from "./DisplayableOnMap";

const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;


export class CustomMap {
  private map: google.maps.Map

  constructor(){
    
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {zoom: 3, center: {lat:0, lng:0}, mapId: "MY_MAP"}
    );
  }

  public AddMarker(object: DisplayableOnMap){

    const marker = new AdvancedMarkerElement({
      map: this.map,
      position: object.getLocation(),
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: object.getDetails(),  
      });
       
      infoWindow.open(this.map, marker);     
    });

    this.map.setCenter(object.getLocation())
  }
}