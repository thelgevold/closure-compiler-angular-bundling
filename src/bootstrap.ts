import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app.module.ngfactory';
import {Basic} from './basic';
import {enableProdMode} from '@angular/core';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
