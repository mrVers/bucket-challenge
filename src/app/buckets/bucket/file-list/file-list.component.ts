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
  errorMessage: String   = '';
  selectedFile;

  constructor( private dataService: DataService,
               private bucketService: BucketService,
               private router: Router,
               private route: ActivatedRoute,
               @Inject(APP_CONFIG) private CONFIG ) {

    this.fileList = [];

  }

  ngOnInit() {

    // get bucked data
    this.route.data
      .subscribe(( data: { bucket: Bucket } ) => {
        this.bucket = data.bucket;
      });

    this.bucketId = this.bucket.id;

    // init uploader
    this.uploader = new FileUploader({
      url              : this.CONFIG.url + '/buckets/' + this.bucketId + '/objects',
      authToken        : 'Token ' + this.CONFIG.token,
      autoUpload       : true,
      removeAfterUpload: false
    });

    // updating file list
    this.updateFileList();

  }

  ngAfterViewInit() {

    // to fix CORS error
    this.uploader.onAfterAddingFile = (item => {
      item.withCredentials = false;
    });

    // updating file list on upload
    this.uploader.onCompleteItem = () => {
      this.updateFileList();
      this.errorMessage = '';
    };

    // upload error
    this.uploader.onErrorItem = () => {
      this.errorMessage = 'There was an error uploading your file. Please try again.';
    };
  }

  // update list function
  updateFileList() {
    this.bucketService.getBucketObjects(this.bucketId)
      .subscribe(fileList => {
          this.fileList = fileList.objects;
        },
        ( error ) => {
          console.log(error);
          this.errorMessage = 'There was an error updating your file list. Please refresh the page.';
        });
  };

  // delete file function
  deleteFileObject() {
    this.bucketService.deleteBucketObjects(this.bucketId, this.selectedFile.name)
      .subscribe(
        ( res ) => {
          // if successful remove, splice from list
          if ( res.status === 200 ) {
            for ( let i = 0; i < this.fileList.length; i++ ) {
              if ( this.selectedFile.name === this.fileList[ i ].name ) {
                this.fileList.splice(i, 1);
              }
            }
          }
        },
        // on error display message
        ( error ) => {
          console.log(error);
          this.errorMessage = 'There was a problem deleting your file. Please try again.';
        });
  };

  // set file on modal open
  setFile( file ) {
    this.errorMessage = '';
    this.selectedFile = file;
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
