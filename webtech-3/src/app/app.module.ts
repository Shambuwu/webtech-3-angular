import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import {DataTablesModule} from "angular-datatables";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    FooterComponent,
    HomePageComponent,
    DashboardPageComponent,
    LoginComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        DataTablesModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
