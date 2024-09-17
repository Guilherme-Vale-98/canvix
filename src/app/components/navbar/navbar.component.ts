import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  whiteBg = true;
  logoUrl = "assets/logoBlack.png";
  isHomePage: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/home';
        if (this.isHomePage) {
          this.checkScrollPosition();
          return
        }
        this.whiteBg = true;
        this.logoUrl = "assets/logoBlack.png";
        if(typeof window !== "undefined") window.scrollTo(0,0)
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isHomePage) {
      this.checkScrollPosition();
    }
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
