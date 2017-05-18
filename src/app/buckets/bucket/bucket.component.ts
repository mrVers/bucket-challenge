import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from '@angular/router';
import {BucketService} from '../bucket.service';
import {DataService} from '../../data.service';

@Component({
  selector   : 'bc-bucket',
  templateUrl: './bucket.component.html',
  styleUrls  : [ './bucket.component.scss' ],
  providers  : [ BucketService, DataService ]
})
export class BucketComponent implements OnInit {

  bucket: Bucket;

  constructor( private bucketService: BucketService,
               private route: ActivatedRoute,
               private dataService: DataService ) {

    this.bucket = {
      id      : null,
      name    : 'Default bucket',
      location: {
        id  : null,
        name: null
      }
    };

  }

  ngOnInit() {

    this.route.params
      .switchMap(( params: Params ) => this.bucketService.getBucket(params[ 'id' ]))
      .subscribe(( bucketItem ) => {
        this.dataService.selectedBucket = bucketItem;
        this.bucket = bucketItem;
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
