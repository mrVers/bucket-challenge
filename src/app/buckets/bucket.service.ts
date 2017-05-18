import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
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

}

