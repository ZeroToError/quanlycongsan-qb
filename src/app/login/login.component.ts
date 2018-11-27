import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginModel} from '../_models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel
  constructor(private router: Router) { }

  ngOnInit() {
    this.loginModel = new LoginModel();
  }

  login() {
    localStorage.setItem('username', this.loginModel.username);
    this.router.navigate(['']);
  }

  isValidated(): boolean {
    return this.isNotEmptyString(this.loginModel.username) && this.isNotEmptyString(this.loginModel.password);
  }

  private isNotEmptyString(text: String) {
    return text !== undefined && text !== null && text !== '';
  }
}
