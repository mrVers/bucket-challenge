import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { BucketsComponent } from './buckets/buckets.component';
import { BucketComponent } from './buckets/bucket/bucket.component';
import { FileListComponent } from './buckets/bucket/file-list/file-list.component';
import { BucketDetailsComponent } from './buckets/bucket/bucket-details/bucket-details.component';
import { BucketResolveService } from './buckets/bucket-resolve.service';
import { BucketService } from './buckets/bucket.service';
import { DataService } from './data.service';

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
    resolve: {
      bucket: BucketResolveService
    },
    children : [
      {
        path     : '',
        component: FileListComponent
      },
      {path: 'details', component: BucketDetailsComponent}
    ]
  }
];

@NgModule({
  imports  : [ RouterModule.forRoot(routes) ],
  exports  : [ RouterModule ],
  providers: [ BucketService, BucketResolveService, DataService ]
})

export class AppRoutingModule {
}
