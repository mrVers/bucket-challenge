import { Injectable, Inject } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';
import { APP_CONFIG, AppConfig } from './app-config';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor(@Inject(APP_CONFIG) private CONFIG : AppConfig) {
    super();

    // Set the default 'Content-Type' header
    this.headers.set('Authorization', 'Token ' + CONFIG.token);
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
