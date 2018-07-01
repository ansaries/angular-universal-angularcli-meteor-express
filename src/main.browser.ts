
///<reference path="../node_modules/@types/meteor/index.d.ts"/>
///<reference path="../node_modules/@types/meteor-roles/index.d.ts"/>
///<reference path="../node_modules/rxjs/Rx.d.ts"/>
///<reference path="../node_modules/@types/meteor-accounts-phone/index.d.ts"/>
///<reference path="../node_modules/@types/gapi/index.d.ts"/>
///<reference path="../node_modules/@types/gapi.auth2/index.d.ts"/>
///<reference path="../node_modules/@types/googlemaps/index.d.ts"/>
import './init';
import 'meteor-client';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppBrowserModule).catch(err => console.log(err));
});
