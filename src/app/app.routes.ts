import {Routes} from '@angular/router';
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {ServersComponent} from "./pages/dashboard-page/pages/servers/servers.component";
import {LeaderboardComponent} from "./pages/dashboard-page/pages/leaderboard/leaderboard.component";

export const routes: Routes = [{
  path: "", component: DashboardPageComponent,
  children: [{
    path: '',
    redirectTo: 'servers',
    pathMatch: 'full'
  }, {
    path: 'servers',
    loadComponent: () => import('./pages/dashboard-page/pages/servers/servers.component').then(m => m.ServersComponent)
  }, {
    path: 'leaderboard',
    loadComponent: () => import('./pages/dashboard-page/pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent),
  }]
}];
