import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuienesComponent } from './components/quienes/quienes.component';

const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'empresa', component: QuienesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
