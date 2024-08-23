import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherInstagram, featherFacebook, featherLinkedin } from '@ng-icons/feather-icons';
import { tablerMail, tablerMapPin, tablerPhone } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({tablerMail, tablerPhone, tablerMapPin, featherInstagram, featherFacebook, featherLinkedin})],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
