import {Component, OnInit} from '@angular/core';
import {BucketService} from './bucket.service';

@Component({
  selector   : 'bc-buckets',
  templateUrl: './buckets.component.html',
  styleUrls  : [ './buckets.component.scss' ],
  providers  : [ BucketService ]
})
export class BucketsComponent implements OnInit {

  newBucket: boolean;
  buckets: Bucket[];
  locations: Location[];

  constructor( private bucketService: BucketService ) {

    this.newBucket = false;

    this.buckets   = [];
    this.locations = [];

  }

  addNewBucket() {
    this.newBucket = true;
  }

  onCreated( createdBucket ) {
    if ( createdBucket ) {
      this.buckets.push(createdBucket);
      this.newBucket = false;
    }
    else {
      this.newBucket = true;
      // error
    }


  }

  ngOnInit() {

    this.bucketService.getBucketList()
      .subscribe(bucketList => {
        this.buckets = bucketList;
      });

    this.bucketService.getBucketLocations()
      .subscribe(bucketLocations => {
        this.locations = bucketLocations;
      });

  }


}

interface Bucket {
  id: string;
  name: string;
  location: Location;
}

interface Location {
  id: string;
  name: string;
}
