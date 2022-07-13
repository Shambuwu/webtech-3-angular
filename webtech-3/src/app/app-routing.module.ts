import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
