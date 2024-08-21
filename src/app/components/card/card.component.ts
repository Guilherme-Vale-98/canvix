import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {featherPenTool } from '@ng-icons/feather-icons';
import {bootstrapPencil} from '@ng-icons/bootstrap-icons'
import { Service } from '../services/services.model';
import { tablerSpeakerphone, tablerDiamond, tablerPalette, tablerUserQuestion} from '@ng-icons/tabler-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  viewProviders: [provideIcons({featherPenTool, bootstrapPencil, tablerSpeakerphone, tablerDiamond, tablerPalette, tablerUserQuestion })],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  service!: Service;
}
