import {Component, OnInit} from '@angular/core';
import {AsyncPipe, DecimalPipe} from "@angular/common";
import {ServerCardComponent} from "../../../../shared/components/server-card/server-card.component";
import {Observable} from "rxjs";
import {UserStats} from "../../../../shared/models/user-stats.model";
import {UserStatsService} from "../../../../shared/services/user-stats.service";

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [
    AsyncPipe,
    ServerCardComponent,
    DecimalPipe
  ],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent implements OnInit{
  usersStats$: Observable<UserStats[]>

  constructor(private userStatsService: UserStatsService) {
  }

  ngOnInit() {
    this.usersStats$ = this.userStatsService.fetchAllStats()
  }
}
