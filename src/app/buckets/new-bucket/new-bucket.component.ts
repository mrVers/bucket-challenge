import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {BucketsComponent} from '../buckets.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'bc-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls: [ './new-bucket.component.scss' ]
})
export class NewBucketComponent implements OnInit {

  bucketCreated: boolean;
  // model : Model;
  selectedLocation;
  model;

  @Output()
  onCreated = new EventEmitter<any>();

  @Input()
  locations;

  constructor() {

    this.model = {
      name: '',
      location: {
        id: null,
        name: null
      }
    };

    this.bucketCreated = false;

  }

  createBucket() {

    this.onCreated.emit(this.model);

    this.bucketCreated = true;

  };

  closeBucketCreation() {

    this.onCreated.emit(null);

  };


  ngOnInit() {
  }

}

interface Model {
  name: string;
  location: Location;
}

interface Location {
  id: string;
  name: string;
}
