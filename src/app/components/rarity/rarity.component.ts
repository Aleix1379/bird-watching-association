import {Component, Input, OnInit} from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {Rarity} from '../../interfaces/Observation';

@Component({
    selector: 'app-rarity',
    templateUrl: './rarity.component.html',
    styleUrls: ['./rarity.component.scss'],
})
export class RarityComponent implements OnInit {
    faStar = faStar;
    @Input() rarity: Rarity;

    rating = [] = [];

    constructor() {
    }

    ngOnInit() {
        for (let i = 0; i < 3; i++) {
            this.rating.push(this.rarity.value > i);
        }
    }

}
