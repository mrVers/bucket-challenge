import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app-config');

export const APP_CONFIG_EXPORT: AppConfig  = {
  url: 'https://challenge.3fs.si/storage',
  token: '119A1431-D493-4747-8A9E-B0F15B81D3CD'
};

export interface AppConfig {
    url: string;
	token: string;
}