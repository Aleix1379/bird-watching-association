import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Observation, Rarity} from '../../interfaces/Observation';

@Injectable({
    providedIn: 'root'
})
export class ObservationService {
    readonly data: Observation[] = [
        {
            speciesName: `Observation in Espoo`,
            rarity: ObservationService.getRandomRarity(),
            notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet arcu a eros porta mollis ' +
                'vel in nisi. Nullam posuere rhoncus mi. Duis sit amet purus lorem. Aliquam lectus magna, placerat in ' +
                'diam et, mollis dapibus nibh. Etiam quis risus eget odio hendrerit pulvinar. Phasellus a porttitor li' +
                'bero. Nunc tincidunt, diam at ornare porta, eros odio euismod quam, vitae rutrum leo risus eu ligula.' +
                ' Fusce viverra, erat vitae placerat tempor, mauris nunc feugiat nisl, a condimentum felis quam eget a' +
                'ugue. Quisque tristique nisi ut velit imperdiet bibendum. Sed dignissim a quam ut lobortis. Fusce acc' +
                'umsan est eget nisi lobortis, eget ultricies odio placerat.',
            timestamp: 1573975812,
            geolocation: {
                lat: 60.205490,
                lng: 24.655899
            },
            pictures: [''],
            videos: [''],
            sounds: ['']
        },
        {
            speciesName: `Observation in Tampere`,
            rarity: ObservationService.getRandomRarity(),
            notes: 'Phasellus placerat et lacus in laoreet. Nullam molestie neque nec commodo vehicula. Duis venenatis ' +
                'eros id nunc elementum, eu rhoncus urna fringilla. Sed a vestibulum ex, sed rhoncus velit. Mauris null' +
                'a dolor, varius in felis ac, dignissim ultrices magna. Nam porta enim sollicitudin sem semper, vitae h' +
                'endrerit tortor accumsan. Praesent viverra elit in rhoncus auctor. Nunc hendrerit quam eget nisi moles' +
                'tie, eu egestas ex bibendum. Nulla auctor tincidunt lectus, ut venenatis elit scelerisque sit amet. Ma' +
                'ecenas sodales tortor felis, eget volutpat nunc malesuada et. In in erat blandit, consequat ante lacinia, commodo ligula.',
            timestamp: 1574148612,
            geolocation: {
                lat: 61.49911,
                lng: 23.78712
            },
            pictures: [''],
            videos: [''],
            sounds: ['']
        },
        {
            speciesName: `Observation in Helsinki`,
            rarity: ObservationService.getRandomRarity(),
            notes: 'Praesent ac quam interdum, aliquet nibh ac, pharetra libero. Pellentesque habitant morbi tristique ' +
                'senectus et netus et malesuada fames ac turpis egestas. Nullam suscipit nulla sed velit tempor, sed au' +
                'ctor enim dignissim. Nulla in bibendum purus, vitae convallis lacus. Sed et urna nec neque blandit tin' +
                'cidunt. Praesent nec rhoncus massa, et lacinia tortor. Nunc tempus diam sed mauris mollis pharetra.',
            timestamp: 1574062212,
            geolocation: {
                lat: 60.192059,
                lng: 24.945831
            },
            pictures: [''],
            videos: [''],
            sounds: ['']
        },
    ];

    constructor() {
    }

    private static getRandomRarity(): Rarity {
        const value = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        let name = '';

        switch (value) {
            case 1:
                name = 'Common';
                break;
            case 2:
                name = 'Rare';
                break;
            case 3:
                name = 'Extremely rare';
                break;
        }

        return {
            name,
            value
        };
    }

    getObservations(): Observable<Observation[]> {
        return of(this.data);
    }

}
