import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import {APP_CONFIG, AppConfig} from '../app-config';

@Injectable()
export class BucketService {

  constructor( @Inject(APP_CONFIG) private CONFIG: AppConfig,
               private http: Http ) {

  }

  getBucketList() {
    return this.http.get(this.CONFIG.url + '/buckets')
      .map(res => res.json().buckets);

  }

  getBucketLocations() {
    return this.http.get(this.CONFIG.url + '/locations')
      .map(res => res.json().locations);

  }

  getBucket( bucketId ) {
    return this.http.get(this.CONFIG.url + '/buckets/' + bucketId)
      .toPromise()
      .then(bucket => bucket)
      .catch(err => {
        console.log(err);
      });

  }

  createBucket( bucketModel ) {
    return this.http.post(this.CONFIG.url + '/buckets', bucketModel)
      .map(res => res.json());
  }

  deleteBucket( bucketId ) {
    return this.http.delete(this.CONFIG.url + '/buckets/' + bucketId)
      .map(res => res);

  }

  getBucketObjects( bucketId ) {
    return this.http.get(this.CONFIG.url + '/bucket/' + bucketId + '/objects')
      .map(res => res.json());

  }

}
