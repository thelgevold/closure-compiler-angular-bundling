import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './Basic';

import {GridDemo} from './components/grid/grid-demo';
import {Grid} from './components/grid/grid';

@NgModule({
  declarations: [Basic, GridDemo, Grid],
  bootstrap: [Basic],
  imports: [BrowserModule],
})
export class AppModule {}
