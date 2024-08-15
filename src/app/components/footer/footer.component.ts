import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {featherInstagram, featherFacebook, featherLinkedin} from '@ng-icons/feather-icons'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({featherInstagram, featherFacebook, featherLinkedin})],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
