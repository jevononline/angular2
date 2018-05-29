
import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  // apiEndpoint: string;
  pageSize: number;
  pageSizeOptions: number[];
}

export const APP_CONFIG_VALUE: AppConfig = {
  // apiEndpoint: '/api',
  pageSize: 25,
  pageSizeOptions: [5, 10, 25, 50, 100]
};