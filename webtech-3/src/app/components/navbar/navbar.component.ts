import { Component, OnInit } from '@angular/core';
import {Emitters} from "../../emitters/emitters";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  authenticated = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (authenticated: boolean) => {
        this.authenticated = authenticated;
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.authenticated = false;
  }
}
