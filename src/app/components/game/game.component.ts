import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnswerOption } from 'src/app/models/anser_option.model';
import { Game } from 'src/app/models/game.model';
import { Question } from 'src/app/models/question.model';
import { GameService } from 'src/app/services/game.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  questionForm!: FormGroup;

  game!: Game;

  question!: Question;

  answerOptions!: AnswerOption[];

  reward!: number;

  constructor(
    private gameService: GameService,
    private questionService: QuestionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      ansId: ['', Validators.required],
    });
    this.loadActiveGame();
  }

  loadActiveGame() {
    this.gameService.getActiveGame().subscribe(
      (resp) => {
        this.game = resp
        this.loadQuestion();
      },
      (error) => console.error(error)
    );
  }

  loadQuestion() {
    this.questionService
      .getQuestionByCategory(this.game.round.category.id)
      .subscribe(
        (resp) => {
          this.question = resp;
          this.loadAnswerOptions();
        },
        (error) => console.error(error)
      );
  }

  loadAnswerOptions() {
    this.questionService.getAnswerOptions(this.question.id).subscribe(
      (resp) => (this.answerOptions = resp),
      (error) => console.error(error)
    );
  }

  continue(ansOp: AnswerOption) {
    this.gameService.continueGame(ansOp).subscribe(
      (resp) => {
        if (resp.status.id != 1) {
          this.router.navigate(['terminar', resp.id]);
        } else {
          this.ngOnInit();
        }
      },
      (error) => console.error(error)
    );
  }

  finishGame() {
    this.gameService.finishGame(this.game).subscribe(
      (resp) => {
        this.router.navigate(['../terminar', resp.id]);
      },
      (error) => console.error(error)
    );
  }

  validateAnswer() {
    this.reward = this.game.round.reward.amount;
    this.questionService
      .getAnswerOptionById(this.questionForm.value.ansId)
      .subscribe(
        (resp) => {
          this.continue(resp);
        },
        (error) => console.error(error)
      );
  }
}
