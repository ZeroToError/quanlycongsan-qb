import { Injectable } from '@angular/core';
import {API_URL, httpOptions} from '../_constants/constants';
import {HttpClient} from '@angular/common/http';
import {DeXuatV2} from '../_models/de-xuat-v2';

@Injectable({
  providedIn: 'root'
})
export class DeXuatService {
    private deXuatUrl =  API_URL +  '/dexuats';


    constructor(private http: HttpClient) {

    }

    getAll(loaiDeXuat: number, offset: number, limit: number) {
      return this.http.get(`${this.deXuatUrl}?loaiDeXuat=${loaiDeXuat}&offset=${offset}&limit=${limit}`);
    }

    add(deXuat: DeXuatV2) {
        return this.http.post(this.deXuatUrl, deXuat, httpOptions);
    }
}
