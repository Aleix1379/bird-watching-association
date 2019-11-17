import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObservationComponent } from './new-observation.component';

describe('NewObservationComponent', () => {
  let component: NewObservationComponent;
  let fixture: ComponentFixture<NewObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewObservationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
