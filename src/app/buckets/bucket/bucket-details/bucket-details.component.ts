import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../data.service';

@Component({
  selector   : 'bc-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls  : [ './bucket-details.component.scss' ]
})
export class BucketDetailsComponent implements OnInit {

  bucket;

  constructor( private dataService: DataService ) {



  }

  ngOnInit() {

    // sync bucked data from dataService
    this.bucket = this.dataService.selectedBucket;
    // set default size not present in response
    this.bucket.size = 5;
  }

}
