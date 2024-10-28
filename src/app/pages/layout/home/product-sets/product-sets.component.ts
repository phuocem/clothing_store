import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-sets',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './product-sets.component.html',
  styleUrl: './product-sets.component.scss'
})
export class ProductSetsComponent {
  constructor(private router: Router) {} // Inject Router
  value = 0;
  viewcard() {
    this.router.navigate(['/product']); // Navigate to the login page
  }
  product =[
    {
      name: 'Product 1',
      price: 100,
      description: 'This is a product',
      image: 'assets/product/ao.png',
      quantity: 1
    },
    {
      name: 'Product 2',
      price: 200,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 3',
      price: 300,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 4',
      price: 400,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 5',
      price: 500,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 6',
      price: 600,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 7',
      price: 700,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 8',
      price: 800,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 9',
      price: 900,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    },
    {
      name: 'Product 10',
      price: 1000,
      description: 'This is a product',
      image: 'https://via.placeholder.com/150',
      quantity: 1
    }
    ]
}
