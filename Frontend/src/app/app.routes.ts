import { Routes } from '@angular/router';
import path from 'path';
import { Login } from './login/login.component';
import { App } from './app.component';
import { Home } from './home/home.component';
export const routes: Routes = [
      { path: '', component: App },         // Default route
     { path: 'login', component: Login }, 
     { path: 'home', component: Home}
];
