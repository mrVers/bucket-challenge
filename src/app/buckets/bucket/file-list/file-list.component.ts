import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DataService } from '../../../data.service';
import { BucketService } from '../../bucket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { APP_CONFIG } from '../../../app-config';


@Component({
  selector   : 'bc-file-list',
  templateUrl: './file-list.component.html',
  styleUrls  : [ './file-list.component.scss' ]
})
export class FileListComponent implements OnInit, AfterViewInit {

  bucket: Bucket;
  uploader: FileUploader = null;
  fileList;
  bucketId: string;

  constructor( private dataService: DataService,
               private bucketService: BucketService,
               private router: Router,
               private route: ActivatedRoute,
               @Inject(APP_CONFIG) private CONFIG ) {

    this.fileList = [];

  }

  ngOnInit() {

    this.route.data
      .subscribe(( data: { bucket: Bucket } ) => {
        this.bucket = data.bucket;
      });

    this.bucketId = this.bucket.id;

    this.uploader = new FileUploader({
      url              : this.CONFIG.url + '/buckets/' + this.bucketId + '/objects',
      authToken        : 'Token ' + this.CONFIG.token,
      autoUpload       : true,
      removeAfterUpload: false
    });

    console.log(this.bucketId);

    this.updateFileList();

  }

  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });

    this.uploader.onCompleteItem = () => {
      this.updateFileList();
    };
  }

  updateFileList() {
    this.bucketService.getBucketObjects(this.bucketId)
      .subscribe(fileList => {
          this.fileList = fileList.objects;
        },
        ( error ) => {
          console.log(error);
        });
  };

  deleteFileObject( removableFile ) {
    this.bucketService.deleteBucketObjects(this.bucketId, removableFile.name)
      .subscribe(
        ( res ) => {
          if ( res.status === 200 ) {
            for ( let i = 0; i < this.fileList.length; i++ ) {
              if ( removableFile.name === this.fileList[ i ].name ) {
                this.fileList.splice(i, 1);
              }
            }
          }
        },
        ( error ) => {
          console.log(error);
        });
  };


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
