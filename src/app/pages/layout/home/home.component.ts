import { Component } from '@angular/core';
import {NavbarComponent} from '../../../components/navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {ProductSetsComponent} from './product-sets/product-sets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    ProductSetsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
