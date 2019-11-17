import {Component, Input, OnInit} from '@angular/core';
import {Observation} from '../../interfaces/Observation';

@Component({
    selector: 'app-observation-card',
    templateUrl: './observation-card.component.html',
    styleUrls: ['./observation-card.component.scss'],
})
export class ObservationCardComponent implements OnInit {

    @Input() observation: Observation;

    constructor() {
    }

    ngOnInit() {
    }

}
