import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BucketsComponent } from './buckets/buckets.component';
import { BucketComponent } from './buckets/bucket/bucket.component';
import { NewBucketComponent } from './buckets/new-bucket/new-bucket.component';
import { requestOptionsProvider } from './default-request-options.service';
import { APP_CONFIG, APP_CONFIG_EXPORT } from './app-config';
import { FileListComponent } from './buckets/bucket/file-list/file-list.component';
import { BucketDetailsComponent } from './buckets/bucket/bucket-details/bucket-details.component';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent,
    BucketComponent,
    NewBucketComponent,
    FileListComponent,
    BucketDetailsComponent,
    ModalComponent,
    FileSelectDirective
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers   : [
    requestOptionsProvider,
    {provide: APP_CONFIG, useValue: APP_CONFIG_EXPORT}
  ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
