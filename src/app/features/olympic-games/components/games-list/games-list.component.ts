import { Component } from '@angular/core';
import { GameList } from '../../interfaces/game-list';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'sh-games-list',
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})

export class GamesListComponent {

  games!: GameList[];

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.gamesService
      .getGamesList()
      .subscribe({
        next: (res) => {
          this.games = res as GameList[];
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}