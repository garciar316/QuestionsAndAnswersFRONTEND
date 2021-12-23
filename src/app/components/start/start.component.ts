import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  playerForm!: FormGroup;

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  startGame() {
    this.gameService.startGame(this.playerForm.value).subscribe(
      () => this.router.navigate(['juego']),
      (error) => console.error(error)
    );
  }

}
