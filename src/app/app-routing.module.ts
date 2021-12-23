import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './components/finish/finish.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { GameComponent } from './components/game/game.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: StartComponent },
  { path: 'juego', component: GameComponent },
  { path: 'historial', component: GameHistoryComponent },
  { path: 'terminar/:id', component: FinishComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
