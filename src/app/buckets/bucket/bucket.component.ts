import {Component, OnInit} from '@angular/core';

@Component({
  selector   : 'bc-bucket',
  templateUrl: './bucket.component.html',
  styleUrls  : [ './bucket.component.scss' ]
})
export class BucketComponent implements OnInit {

  newBucket: boolean;

  constructor() {
  }

  createBucket() {
    this.newBucket = false;
  }

  ngOnInit() {
  }

}
