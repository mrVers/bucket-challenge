import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { BucketService } from './bucket.service';
import { DataService } from '../data.service';

@Injectable()
export class BucketResolveService implements Resolve<Bucket> {

  constructor( private bucketService: BucketService,
               private dataService: DataService,
               private router: Router ) {
  }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Promise<Bucket> {
    let id = route.params[ 'id' ];

    return this.bucketService.getBucket(id)
      .then(( res ) => {
        if ( res ) {
          // save to dataService
          this.dataService.selectedBucket = res.json().bucket;
          console.log('resolved bucket');
          return res.json().bucket;

        } else {
          // bucket not found, navigate to buckets list
          this.router.navigate([ '/buckets' ]);

          return null;
        }
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
