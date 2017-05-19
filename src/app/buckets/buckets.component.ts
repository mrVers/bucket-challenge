import { Component, OnInit } from '@angular/core';
import { BucketService } from './bucket.service';
import { Router } from '@angular/router';

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
  errorMessage: String   = '';

  constructor( private bucketService: BucketService,
               private router: Router ) {

    this.newBucket = false;
    this.buckets   = [];
    this.locations = [];

  }

  // set true when adding
  addNewBucket() {
    this.newBucket = true;
  }

  // func that receives an emit from new-bucket
  onCreated( createdBucket ) {
    // if present, push into buckets array
    if ( createdBucket ) {
      this.buckets.push(createdBucket);
      this.newBucket = false;
    } else {
      // if dismissed, close component
      this.newBucket = false;
    }
  }

  // redirect to bucket item
  onSelect( bucket: Bucket ) {
    this.router.navigate([ '../bucket', bucket.id ]);
  }

  ngOnInit() {

    // get bucket list
    this.bucketService.getBucketList()
      .subscribe(bucketList => {
        this.buckets = bucketList;
          this.errorMessage = '';
      },
      ( error ) => {
        console.log(error);
        this.errorMessage = 'There was an error getting your buckets. Please refresh the page.';
      });

    // get bucket locations
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
