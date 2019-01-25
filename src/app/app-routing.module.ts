import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
const routes: Routes = [

  { path: '', component: DashboardComponent, pathMatch: 'full'},
  { path: 'board', component: BoardComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
