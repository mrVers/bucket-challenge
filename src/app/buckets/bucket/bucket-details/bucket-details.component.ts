import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../data.service';
import {BucketService} from '../../bucket.service';
import {Router} from '@angular/router';

@Component({
  selector   : 'bc-bucket-details',
  templateUrl: './bucket-details.component.html',
  styleUrls  : [ './bucket-details.component.scss' ]
})
export class BucketDetailsComponent implements OnInit {

  bucket;

  errorMessage: String = '';
  deleting: Boolean    = false;

  constructor( private dataService: DataService,
               private bucketService: BucketService,
               private router: Router ) {

  }

  deleteBucket() {

    this.errorMessage = 'Deleting...';
    this.deleting     = true;

    this.bucketService.deleteBucket(this.bucket.id)
      .subscribe(
        ( res ) => {

          // on success, redirect to bucket-list
          this.router.navigate([ '../buckets' ]);
        },

        // error handling
        ( error ) => {
          console.log(error);
          this.errorMessage = 'There was a problem deleting your bucket. Please try again.';
          this.deleting     = false;
        }
      );
  };


  ngOnInit() {

    // sync bucked data from dataService
    this.bucket      = this.dataService.selectedBucket;
    // set default size not present in response
    this.bucket.size = 5;
  }

}
