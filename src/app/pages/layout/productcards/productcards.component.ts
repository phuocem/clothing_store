import { Component } from '@angular/core';
import {NavbarComponent} from '../../../components/navbar/navbar.component';

@Component({
  selector: 'app-productcards',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './productcards.component.html',
  styleUrl: './productcards.component.scss'
})
export class ProductcardsComponent {

}
