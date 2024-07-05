import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicGamesRoutingModule } from './olympic-games-routing.module';
import { TableModule} from 'primeng/table';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    GamesListComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    OlympicGamesRoutingModule,
    TableModule
  ]
})

export class OlympicGamesModule { }