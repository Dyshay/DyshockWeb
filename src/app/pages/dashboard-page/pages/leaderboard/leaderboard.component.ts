import { Component } from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {ServerCardComponent} from "../../../../shared/components/server-card/server-card.component";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
    imports: [
        AsyncPipe,
        ServerCardComponent
    ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {

}
