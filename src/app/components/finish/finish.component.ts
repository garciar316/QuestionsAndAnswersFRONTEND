import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  game$!: Observable<Game>;

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const gameId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.game$ = this.gameService.getGameById(gameId);
  }
}
