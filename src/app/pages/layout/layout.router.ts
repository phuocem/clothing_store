import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductcardsComponent} from './productcards/productcards.component';
import {CartComponent} from './cart/cart.component';


export const LAYOUT_ROUTERS: Routes = [
  { path: 'login', component: LoginComponent
  },
  {path: '', component: HomeComponent},
  // other routes
  {
    path: 'product', component: ProductcardsComponent
  },
  {
    path: 'cart', component: CartComponent
  }
];
