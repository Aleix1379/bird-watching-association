import {Component, OnInit, ViewChild} from '@angular/core';
import {Observation} from '../interfaces/Observation';
import {Events, IonVirtualScroll, ModalController} from '@ionic/angular';
import {ObservationService} from '../services/observation/observation.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild(IonVirtualScroll, null) virtualScroll: IonVirtualScroll;

  observations: Observation[] = [];

  constructor(private observationService: ObservationService,
              private modalCtrl: ModalController,
              private router: Router,
              private events: Events,
              private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.events.subscribe('new-observation', (observation: Observation) => {
      console.log('new observation');
      console.log(observation);
      this.observations.push(observation);

      this.localStorageService.setObservations(this.observations);
    });

    const localObservations = this.localStorageService.getObservations();

    if (!localObservations || localObservations.length === 0) {
      this.getObservations();
    } else {
      this.observations = localObservations;
      this.observations = this.sortObservations();
    }
  }

  private getObservations() {
    this.observationService.getObservations().subscribe(
        data => {
          this.observations = data;
          this.observations = this.sortObservations();
        },
        error => {
          console.log('Error getting observations data...');
          console.log(error);
        }
    );
  }

  async newObservation() {
    console.log('newObservation...');
    this.router.navigateByUrl('new-observation').catch(console.error);
  }

  tracky(index, observation: Observation) {
    return observation.speciesName;
  }

  private sortObservations() {
    return this.observations.sort(
        (a, b) => {
          return a.timestamp < b.timestamp ?
              1 : a.timestamp > b.timestamp ?
                  -1 : 0;
        }
    );
  }

}
