import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './Basic';

import {GridDemo} from './components/grid/grid-demo';
import {Grid} from './components/grid/grid';

import {Treeview, TreeviewDemo} from './components/treeview';

@NgModule({
  declarations: [Basic, GridDemo, Grid, Treeview, TreeviewDemo],
  bootstrap: [Basic],
  imports: [BrowserModule],
})
export class AppModule {}
