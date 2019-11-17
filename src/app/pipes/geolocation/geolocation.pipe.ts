import { Pipe, PipeTransform } from '@angular/core';
import {GeoLocation} from '../../interfaces/Observation';

@Pipe({
  name: 'geolocation'
})
export class GeolocationPipe implements PipeTransform {

  transform(value: GeoLocation, ...args: any[]): any {
    return `Latitude ${value.lat} Longitude ${value.lng}`;
  }

}
