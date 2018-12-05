import { Injectable } from '@angular/core';
import {NhomTaiSan} from '../_models/nhom-tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {API_URL, httpOptions} from '../_constants/constants';

@Injectable({
  providedIn: 'root'
})
export class NhomTaiSanService {

    private nhomTaiSanUrl = API_URL + '/nhomtaisans';
    constructor(private http: HttpClient) {

    }

    getAll(): Observable<any> {
        return this.http.get< any >(this.nhomTaiSanUrl);
    }

    addNhomTaiSan(nhomTaiSan: any): Observable<any> {
        return this.http.post<any>(this.nhomTaiSanUrl, nhomTaiSan, httpOptions);
    }


    editNhomTaiSan(nhomTaiSan: any): Observable<any> {
        return this.http.put<any>(`${this.nhomTaiSanUrl}/${nhomTaiSan.id}`, nhomTaiSan, httpOptions);
    }
}
