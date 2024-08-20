import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  whiteBg = false;
  logoUrl = "assets/logo.png";
  
  ngOnInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    if (typeof window !== "undefined"){
      const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    
    this.whiteBg = scrollPosition > 680;
    /* if(scrollPosition > 900 && scrollPosition < 1050){
      this.whiteBg = false;
    } */
    this.logoUrl = scrollPosition > 680 ? "assets/logoBlack.png" : "assets/logo.png";
  
  }
  }
}
