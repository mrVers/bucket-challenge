import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bc-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit {
	
  name: string;
  location: string;
  newBucket: boolean;
  buckets : Bucket[];

  constructor() { 
  
  this.newBucket = false;
	  
  this.buckets = [
	{
	  id: 'my-awesome-bucket',
	  name: 'my-awesome-bucket',
	  location: {
		id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
		name: 'Kranj'
	  }
	},
	{
	  id: 'my-awesome-bucket',
	  name: 'my-awesome-bucket',
	  location: {
		id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
		name: 'Kranj'
	  }
	},
	{
	  id: 'my-awesome-bucket',
	  name: 'my-awesome-bucket',
	  location: {
		id: 'a0c51094-05d9-465f-8745-6cd9ee45b96d',
		name: 'Kranj'
	  }
	}
  ];
    
  }
	
  addNewBucket() {
		this.newBucket = true;
  }
	
  onCreated(created: boolean) {
		this.newBucket = created;
	
  }

  ngOnInit() {
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