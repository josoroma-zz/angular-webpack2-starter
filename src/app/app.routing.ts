/* tslint:disable: max-line-length */

/**
 * Routing
 */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'parent', loadChildren: './features/parent/index#ParentModule' },
  { path: 'graph', loadChildren: './features/graph/index#GraphModule' },
  { path: '**', component: NotFound404Component }
];
