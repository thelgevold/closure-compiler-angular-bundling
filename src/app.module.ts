import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Basic} from './Basic';

import {GridDemo} from './components/grid/grid-demo';
import {Grid} from './components/grid/grid';
import {Treeview, TreeviewDemo} from './components/treeview';
import {Survey, SurveyDemo} from './components/dynamic-form';
import {InputControls} from './components/input-controls/input-controls';
import {Name} from './components/two-way-binding/name';

import {routing} from './app.routes';

@NgModule({
  declarations: [Basic, GridDemo, Grid, 
                 Treeview, TreeviewDemo,
                 Survey, SurveyDemo, 
                 InputControls,
                 Name
                 ],
  bootstrap: [Basic],
  imports: [BrowserModule, 
            routing, 
            FormsModule,
            ReactiveFormsModule],
})
export class AppModule {}
