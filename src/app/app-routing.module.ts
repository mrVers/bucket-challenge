import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BucketsComponent} from './buckets/buckets.component';
import {BucketComponent} from './buckets/bucket/bucket.component';
import {FileListComponent} from './buckets/bucket/file-list/file-list.component';
import {BucketDetailsComponent} from './buckets/bucket/bucket-details/bucket-details.component';

const routes: Routes = [
  {
    path     : 'buckets',
    component: BucketsComponent
  },
  {
    path      : '',
    redirectTo: '/buckets',
    pathMatch : 'full'
  },
  {
    path     : 'bucket/:id',
    component: BucketComponent,
    children : [
      {path: '', component: FileListComponent},
      {path: 'details', component: BucketDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
