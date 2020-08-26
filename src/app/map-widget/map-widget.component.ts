import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Marker } from './@types/marker';
import { tileLayer, latLng, marker, map, icon } from 'leaflet';
import { Coords } from './@types/coords';

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: ['./map-widget.component.css']
})
export class MapWidgetComponent implements OnInit {
  @Input() zoom: number;
  @Input() center: Coords;
  @Input() markers: Marker[];

  @ViewChild('mapWidget') mapElement: ElementRef;

  ngOnInit() {
    const mapObject = map(this.mapElement.nativeElement);
    mapObject.setView(this.center || latLng(0, 0), this.zoom || 3);
    mapObject.addLayer(tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '' }));
    this.markers.forEach(m => marker([m.position.lat, m.position.lng], this.getMarkerIcon(m.color)).addTo(mapObject));
  }

  private getMarkerIcon(color: string) {
    return {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl:
          `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color || 'black'}.png`,
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
      })
    };
  }
}
