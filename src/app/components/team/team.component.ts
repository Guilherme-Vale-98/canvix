import { Component } from '@angular/core';
import { TeamCardComponent } from "../team-card/team-card.component";
import { RouterLink } from '@angular/router';
import { Member } from './team.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TeamCardComponent, RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  members: Member[] = [
    {imgUrl: "assets/member1.png", name: "Esther Howard", position: "Founder & CEO"},
    {imgUrl: "assets/member2.png", name: "Cameron Williamson", position: "Marketing Head"},
    {imgUrl: "assets/member3.png", name: "Liam Cooper", position: "Marketing Head"},
  ]
}
