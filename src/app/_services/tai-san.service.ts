import { Injectable } from '@angular/core';
import {TaiSan} from '../_models/tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, httpOptions} from '../_constants/constants';
import index from '@angular/cli/lib/cli';
import {TaiSanV2} from '../_models/tai-san-v2';





@Injectable({
  providedIn: 'root'
})
export class TaiSanService {
    private taiSanUrl =  API_URL +  '/taisans';


    constructor(private http: HttpClient) {
    }

    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.taiSanUrl}?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }

    getById(id: number): Observable<any> {
        const url = `${this.taiSanUrl}/${id}`;
        return this.http.get(url);
    }

    add(newTaiSan: TaiSanV2): Observable<any> {
        const url = this.taiSanUrl;
        return this.http.post(url, newTaiSan, httpOptions);
    }

    edit(newTaiSan: TaiSanV2): Observable<any> {
        const url = `${this.taiSanUrl}/${newTaiSan.id}`;
        return this.http.put(url, newTaiSan, httpOptions);
    }
}
