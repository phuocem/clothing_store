import { Routes } from '@angular/router';
import {LoginComponent} from './pages/layout/login/login.component';


export const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/layout/layout.router').then(m => m.LAYOUT_ROUTERS)},
  // other routes
];
