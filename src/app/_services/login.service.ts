import { Injectable } from '@angular/core';
import {LoginModel} from '../_models/login-model';
import {Observable} from 'rxjs/Rx';
import {catchError, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../_constants/constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl =  API_URL +  '/account/login';
  constructor(private http: HttpClient) { }


    login (loginModel: LoginModel): Observable<any> {
        return this.http.post<any>(this.loginUrl, loginModel, httpOptions);
    }
}
