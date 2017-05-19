import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBucketComponent } from './new-bucket.component';
import {FormsModule} from "@angular/forms";
import { BucketService } from './../bucket.service';
import {InjectionToken} from '@angular/core';


describe('NewBucketComponent', () => {
  let component: NewBucketComponent;
  let fixture: ComponentFixture<NewBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports : [FormsModule ],
        providers: [BucketService, InjectionToken],
      declarations: [ NewBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
