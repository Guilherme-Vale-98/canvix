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
    console.log(scrollPosition)
    this.whiteBg = scrollPosition > 670;
    this.logoUrl = scrollPosition > 670 ? "assets/logoBlack.png" : "assets/logo.png";
    if(scrollPosition > 1750 && scrollPosition < 2390){
      this.whiteBg = false;
      this.logoUrl = "assets/logo.png"
    }
  
  
  }
  }
}
