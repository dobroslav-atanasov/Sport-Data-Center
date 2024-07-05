import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sh-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})

export class GameComponent {
  
  gameId = -1;

  constructor(private route: ActivatedRoute) {
    this.gameId = Number(this.route.snapshot.params['id']);
    console.log(this.gameId);
  }
}