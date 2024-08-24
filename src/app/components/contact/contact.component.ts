import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherInstagram, featherFacebook, featherLinkedin } from '@ng-icons/feather-icons';
import { tablerMail, tablerMapPin, tablerPhone } from '@ng-icons/tabler-icons';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,NgIconComponent, FormsModule, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  viewProviders: [provideIcons({tablerMail, tablerPhone, tablerMapPin, featherInstagram, featherFacebook, featherLinkedin})],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  };

  formState: 'idle' | 'loading' | 'success' | 'failure' = 'idle';

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formState = 'loading';
      setTimeout(() => {
        const success = Math.random() > 0.5;
        this.formState = success ? 'success' : 'failure';
        if(success) {
          console.log('Form Submitted!');
          console.log('First Name:', this.contactForm.firstName);
          console.log('Last Name:', this.contactForm.lastName);
          console.log('Phone:', this.contactForm.phone);
          console.log('Email:', this.contactForm.email);
          console.log('Message:', this.contactForm.message);
        }
        setTimeout(() => {
          this.resetForm();
          this.formState = 'idle';
        }, 2000); 

      }, 2000); 
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm() {
    this.contactForm = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    };
  }
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}