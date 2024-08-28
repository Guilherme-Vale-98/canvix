import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherInstagram, featherFacebook, featherLinkedin } from '@ng-icons/feather-icons';
import { Member } from '../team/team.models';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  viewProviders: [provideIcons({featherInstagram, featherFacebook, featherLinkedin})],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {
  @Input()
  member!: Member
}
