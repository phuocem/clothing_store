import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {} // Inject Router

  activateRightPanel() {
    this.router.navigate(['/login']); // Navigate to the login page
  }
  home(){
    this.router.navigate(['']);
  }
}
