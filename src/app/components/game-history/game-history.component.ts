import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-history',
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit {
  games$!: Observable<Game[]>;

  p: number = 1;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.games$ = this.gameService.getAllGames();
  }

}
