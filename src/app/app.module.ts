import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BucketsComponent} from './buckets/buckets.component';
import {BucketComponent} from './buckets/bucket/bucket.component';
import {NewBucketComponent} from './buckets/new-bucket/new-bucket.component';
import {requestOptionsProvider} from './default-request-options.service';
import {APP_CONFIG, APP_CONFIG_EXPORT} from './app-config';


@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent,
    BucketComponent,
    NewBucketComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers   : [
    requestOptionsProvider,
    {provide: APP_CONFIG, useValue: APP_CONFIG_EXPORT}
  ],
  bootstrap   : [ AppComponent ]
})
export class AppModule {
}
