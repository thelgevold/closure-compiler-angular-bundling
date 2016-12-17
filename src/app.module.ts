import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {Basic} from './Basic';

import {Survey, SurveyDemo} from './dynamic-form';
import {Treeview, TreeviewDemo} from './treeview'

@NgModule({
  declarations: [Basic, Treeview, TreeviewDemo, Survey, SurveyDemo],
  bootstrap: [Basic],
  imports: [BrowserModule, ReactiveFormsModule],
})
export class AppModule {}
