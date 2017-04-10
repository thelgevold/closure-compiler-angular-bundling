import { platformBrowser }    from '@angular/platform-browser';
//import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

//enableProdMode();

import {addRxObjects} from './rxjs';

addRxObjects();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
