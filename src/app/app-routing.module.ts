import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import {LatestgamesComponent} from './latestgames/latestgames.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'latestgames', component: LatestgamesComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'leaderboard', component: LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, LatestgamesComponent, RulesComponent, ProfileComponent, LeaderboardComponent];