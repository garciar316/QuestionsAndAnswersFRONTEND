import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { Player } from '../models/player.model';
import { AnswerOption } from '../models/anser_option.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private API_SERVER: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.API_SERVER}/juego/listar`);
  }

  public getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.API_SERVER}/juego/${id}`);
  }

  public getActiveGame(): Observable<Game> {
    return this.http.get<Game>(`${this.API_SERVER}/juego/activo`);
  }

  public startGame(player: Player): Observable<any> {
    return this.http.post(`${this.API_SERVER}/jugar/empezar`, player);
  }

  public continueGame(ansOp: AnswerOption): Observable<Game> {
    return this.http.post<Game>(`${this.API_SERVER}/jugar/continuar`, ansOp);
  }

  public finishGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.API_SERVER}/jugar/terminado`, game);
  }
}
