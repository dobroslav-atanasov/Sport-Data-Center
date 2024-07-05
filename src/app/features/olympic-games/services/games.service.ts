import { Injectable } from '@angular/core';
import { GameList } from '../interfaces/game-list';
import { HttpClient } from '@angular/common/http';
import { ApiRouteConstants } from '../../../core/constants/api-route-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getGamesList(): Observable<any> {
    return this.httpClient.get(ApiRouteConstants.OLYMPIC_GAMES_GAMES_ALL);
  }
}