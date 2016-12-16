import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Basic} from './Basic';

import {Treeview, TreeviewDemo} from './treeview'

@NgModule({
  declarations: [Basic, Treeview, TreeviewDemo],
  bootstrap: [Basic],
  imports: [BrowserModule],
})
export class AppModule {}
