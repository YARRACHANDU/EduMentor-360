import { Routes } from '@angular/router';
import { Login } from './login/login.component';
import { Home } from './home/home.component';
export const routes: Routes = [
  { path: '', component: Home },         // Default route pointing to Home component
  { path: 'login', component: Login },
  { path: 'home', component: Home}
];
