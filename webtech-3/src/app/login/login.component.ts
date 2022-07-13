import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login(): void {
    console.log(this.form.getRawValue());
    /*this.http.post('http://localhost:8000/api/login_check', this.form.getRawValue(), {
      //withCredentials: true
    }).subscribe(() => {this.router.navigate(['/dashboard'])});*/

    this.authService
      .login(this.form.getRawValue().username, this.form.getRawValue().password)
      .subscribe(
        () => {
          this.router.navigate(['/']);
        },
        () => {
          this.loginError = true;
        }
      );
  }

}
