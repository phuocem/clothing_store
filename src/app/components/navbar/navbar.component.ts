import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false; // Biến để theo dõi trạng thái của menu

  // Constructor nhận Router và Renderer2
  constructor(private router: Router, private renderer: Renderer2) {}

  // Hàm để điều hướng đến trang đăng nhập
  activateRightPanel() {
    this.router.navigate(['/login']); // Điều hướng đến trang đăng nhập
  }

  // Hàm để điều hướng về trang chủ
  home() {
    this.router.navigate(['']); // Điều hướng về trang chủ
  }

  // Hàm để mở/đóng menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden'); // Khóa cuộn trang
    } else {
      this.renderer.setStyle(document.body, 'overflow', ''); // Kích hoạt cuộn trang
    }
  }

  // Hàm để đóng menu
  closeMenu() {
    this.isMenuOpen = false; // Đặt trạng thái menu thành đóng
    this.renderer.setStyle(document.body, 'overflow', ''); // Kích hoạt cuộn trang
  }
}
