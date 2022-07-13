import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {map} from "rxjs";
import {Emitters} from "../../emitters/emitters";

interface LoginResult {
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private router: Router, private http: HttpClient) {  }

  login(username: string, password: string) {
    return this.http
      .post<LoginResult>(`${this.apiUrl}/login_check`, { username, password })
      .pipe(
        map((x) => {
          this.setLocalStorage(x);
          return x;
        })
      );
  }

  logout() {
    this.clearLocalStorage();
    this.router.navigate(['/login']);
  }

  setLocalStorage(x: LoginResult) {
    localStorage.setItem('token', x.token);
    Emitters.authEmitter.emit(true);
    console.log(localStorage.getItem('token'));
    localStorage.setItem('login-event', 'login' + Math.random());
  }

  clearLocalStorage() {
    localStorage.removeItem('token');
    Emitters.authEmitter.emit(false);
    localStorage.setItem('logout-event', 'logout' + Math.random());
  }
}
