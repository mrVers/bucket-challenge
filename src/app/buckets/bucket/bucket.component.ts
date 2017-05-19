import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';
import { BucketService } from '../bucket.service';
import { DataService } from '../../data.service';

@Component({
  selector   : 'bc-bucket',
  templateUrl: './bucket.component.html',
  styleUrls  : [ './bucket.component.scss' ],
  providers  : [ BucketService ]
})
export class BucketComponent implements OnInit {

  bucket: Bucket;

  constructor( private bucketService: BucketService,
               private route: ActivatedRoute ) {

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

    this.route.data
      .subscribe(( data: { bucket: Bucket } ) => {
      this.bucket = data.bucket;
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
