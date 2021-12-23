import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { StartComponent } from './components/start/start.component';
import { GameService } from './services/game.service';
import { QuestionService } from './services/question.service';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { HeaderComponent } from './components/header/header.component';
import { FinishComponent } from './components/finish/finish.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StartComponent,
    GameHistoryComponent,
    HeaderComponent,
    FinishComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    GameService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
