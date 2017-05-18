import {Component, OnInit} from '@angular/core';
import {BucketService} from './bucket.service';
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

  constructor( private bucketService: BucketService,
               private router: Router) {

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
    } else {
      console.log('canceled');
      this.newBucket = false;
      // error
    }
  }

  onSelect(bucket: Bucket) {
    this.router.navigate(['../bucket', bucket.id]);
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
