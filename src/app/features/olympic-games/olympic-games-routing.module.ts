import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: 'olympic-games',
    children: [
      {
        path: 'games',
        component: GamesListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'game/:id',
        component: GameComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OlympicGamesRoutingModule { }