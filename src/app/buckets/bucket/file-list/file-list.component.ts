import { Component, OnInit, Inject } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DataService } from '../../../data.service';
import { BucketService } from '../../bucket.service';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../../../app-config';


@Component({
  selector   : 'bc-file-list',
  templateUrl: './file-list.component.html',
  styleUrls  : [ './file-list.component.scss' ]
})
export class FileListComponent implements OnInit {

  bucket: Bucket;
  uploader: FileUploader;

  constructor( private dataService: DataService,
               private bucketService: BucketService,
               private router: Router,
               @Inject(APP_CONFIG) private CONFIG ) {

    const URL: any = this.CONFIG.url + '/' + this.bucket.id + '/objects';

    this.uploader = new FileUploader({
      url              : URL,
      autoUpload       : true,
      removeAfterUpload: true
    });

    this.uploader.progress = 0;

  }

  ngOnInit() {
    this.bucket = this.dataService.selectedBucket;
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