import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SportsComponent } from './components/sports/sports.component';
import { CasinoComponent } from './components/casino/casino.component';
import { CasinoLiveComponent } from './components/casino-live/casino-live.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'casino', component: CasinoComponent },
  { path: 'casino-live', component: CasinoLiveComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
