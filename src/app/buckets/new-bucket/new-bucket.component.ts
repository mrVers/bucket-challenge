import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BucketsComponent } from '../buckets.component';

@Component({
  selector: 'bc-new-bucket',
  templateUrl: './new-bucket.component.html',
  styleUrls: ['./new-bucket.component.scss']
})
export class NewBucketComponent implements OnInit {
	
bucketCreated: boolean;
	
	@Output() 
	onCreated = new EventEmitter<boolean>();
	
  constructor() {
	  this.bucketCreated = false;
  }
	
  createBucket() {
	  
	  this.onCreated.emit(false);
	  
	  this.bucketCreated = true;
	
  };
	
  closeBucketCreation() {
	  
	  this.onCreated.emit(false);
	  	
  };
	

  ngOnInit() {
  }

}
