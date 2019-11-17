import {NgModule} from '@angular/core';
import {TimePipe} from './time/time.pipe';
import {GeolocationPipe} from './geolocation/geolocation.pipe';


@NgModule({
    declarations: [
        TimePipe,
        GeolocationPipe,
    ],
    imports: [],
    exports: [
        TimePipe,
        GeolocationPipe
    ]
})
export class PipesModule {
}
