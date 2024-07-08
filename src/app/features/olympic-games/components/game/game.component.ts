import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Game } from '../../interfaces/game';

@Component({
  selector: 'sh-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent implements OnInit {

  gameId: number;
  game: Game | undefined;

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {
    this.gameId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.gamesService.getGameById(this.gameId)
      .subscribe({
        next: (res) => {this.game = res as Game; console.log(res)},
        error: (err) => console.log(err)
      });
  }
}