import { Component } from '@angular/core';
import { Marker } from './map-widget/@types/marker';
import { Coords } from './map-widget/@types/coords';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom = 4;
  center: Coords = {lat: 30.589, lng: 32.26211};
  markers: Marker[] = [
    {position: {lat: 30.589, lng: 32.26211}, color: 'blue'},
    {position: {lat: 34.589, lng: 33.26211}, color: 'gold'},
    {position: {lat: 29.589, lng: 30.26211}, color: 'red'},
    {position: {lat: 3.589, lng: 2.26211}, color: 'green'},
    {position: {lat: 34.589, lng: 32.26211}, color: 'orange'},
    {position: {lat: 30.589, lng: 30.26211}, color: 'yellow'},
    {position: {lat: 29.589, lng: 25.26211}, color: 'violet'},
    {position: {lat: 28.589, lng: 15.26211}, color: 'grey'},
    {position: {lat: 6.589, lng: 10.26211}, color: 'black'},
  ];
}
