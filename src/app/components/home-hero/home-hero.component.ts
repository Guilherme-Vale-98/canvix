import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent implements OnInit {
  imagesLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
   if(typeof window !== "undefined") this.preloadImages();
  }

  preloadImages(): void {
    const images = [
      'assets/ornament1.png',
      'assets/homeHeroImage.png',
      'assets/brands1.png'
    ];

    let imagesLoadedCount = 0;
    const totalImages = images.length;

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === totalImages) {
          this.imagesLoaded = true;
        }
      };
    });
  }
}