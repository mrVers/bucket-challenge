import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {BucketService} from '../bucket.service';

@Component({
  selector   : 'bc-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls  : [ './new-bucket.component.scss' ]
})
export class NewBucketComponent implements OnInit {

  bucketCreating: boolean;
  model: Model;
  selectedLocation;
  // model;

  @Output()
  onCreated = new EventEmitter<any>();

  @Input()
  locations;

  constructor( private bucketService: BucketService ) {

    // initial setup
    this.bucketCreating = false;
    this.model          = {
      name    : '',
      location: {
        id  : null,
        name: null
      }
    };
  }

  // creating a new bucket function
  createBucket() {

    // TODO error handling

    // disable the submit button
    this.bucketCreating = true;

    // bucket model
    const bucketModel: BucketModel = {
      name    : this.model.name,
      location: this.model.location.id
    };

    // calling the bucketService
    this.bucketService.createBucket(bucketModel)
      .subscribe(newCreatedBucket => {
        // emitting the response to the parent component
        this.onCreated.emit(newCreatedBucket);
        this.bucketCreating = false;
      });
  };

  closeBucketCreation() {

    // emitting a null function to parent component
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

interface BucketModel {
  name: string;
  location: string;
}
