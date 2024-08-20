import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Service } from './services.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'bootstrapPencil',
      title: 'Content Marketing',
      description: 'Our team creates engaging and shareable content that resonates with your audience, drives organic traffic'
    }, 
    {
      icon: 'tablerSpeakerphone',
      title: 'Digital Marketing',
      description: "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing"
    },{
      icon: 'tablerPalette',
      title: 'Web Design',
      description: 'We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional'
    }
    ,{
      icon: 'tablerUserQuestion',
      title: 'IT consulting',
      description: 'IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services'
    }
    ,{
      icon: 'tablerDiamond',
      title: 'Brand Identity',
      description: 'It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.'
    }
    ,{
      icon: 'featherPenTool',
      title: 'Graphic Design',
      description: 'Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.'
    }
  ]
}
