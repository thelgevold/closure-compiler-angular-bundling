import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {TreeviewDemo} from './components/treeview';
import {GridDemo} from './components/grid/grid-demo';

const routes: Routes = [
  { path: 'grid', component: GridDemo},
  { path: 'treeview', component: TreeviewDemo}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);