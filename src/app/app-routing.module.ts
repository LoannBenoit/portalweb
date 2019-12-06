import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import{ MonCompteComponent } from './mon-compte/mon-compte.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'login', component: AuthComponent},
  {path: 'mon-compte', component: MonCompteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
