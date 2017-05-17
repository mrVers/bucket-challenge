import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BucketsComponent } from './buckets/buckets.component';
import { BucketComponent } from './buckets/bucket/bucket.component';

const routes: Routes = [
  {
    path: 'buckets',
	component: BucketsComponent
  },
  { 
	path: '',
	redirectTo: '/buckets',
	pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
