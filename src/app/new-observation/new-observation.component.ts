import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {Events} from '@ionic/angular';
import {Observation} from '../interfaces/Observation';
import {LocationService} from '../services/location/location.service';

@Component({
    selector: 'app-new-observation',
    templateUrl: './new-observation.component.html',
    styleUrls: ['./new-observation.component.scss'],
})
export class NewObservationComponent implements OnInit {

    readonly rarities = [
        {
            name: 'Common',
            value: 1
        },
        {
            name: 'Rare',
            value: 2
        },
        {
            name: 'Extremely rare',
            value: 3
        }
    ];

    data = {
        name: '',
        notes: '',
        rarity: null,
        timestamp: null
    };

    constructor(private router: Router,
                private events: Events,
                private locationSerice: LocationService) {
    }

    ngOnInit() {
    }

    async save() {
        console.log('save...');
        this.data.timestamp = moment().unix();
        console.log(this.data);

        const location = await this.locationSerice.getPosition();

        console.log('LOCATION');
        console.log(location);

        const newObservation: Observation = {
            speciesName: this.data.name,
            rarity: this.data.rarity,
            notes: this.data.notes,
            timestamp: this.data.timestamp,
            geolocation: location,
            pictures: [''],
            videos: [''],
            sounds: ['']
        };

        this.events.publish('new-observation', newObservation);

        this.router.navigateByUrl('/').catch(console.error);
    }

    cancel() {
        console.log('cancel...');
        this.data = {
            name: '',
            notes: '',
            rarity: null,
            timestamp: null
        };
        this.router.navigateByUrl('/').catch(console.error);
    }

}
