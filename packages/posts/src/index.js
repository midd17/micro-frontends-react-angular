import 'zone.js';
import 'core-js/features/reflect';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { NgZone } from '@angular/core';

import { AppModule } from './app.module';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule),
  template: '<posts />',
  Router: null,
  NavigationStart: null,
  NgZone,
});

export const { bootstrap, mount, unmount } = lifecycles;