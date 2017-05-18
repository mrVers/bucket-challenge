import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  selectedBucket: Bucket;

  constructor() {

    this.selectedBucket = null;

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

