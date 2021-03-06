import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../_constants/constants';
import {NhomTaiSan} from '../_models/nhom-tai-san';
import {LoaiTaiSan} from '../_models/loai-tai-san';
import {DonViTinh} from '../_models/don-vi-tinh';
import {DonVi} from '../_models/don-vi';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  libraryUrl = API_URL + '/libraries';
  constructor(private http: HttpClient) { }

    getNhomTaiSans(): Observable<NhomTaiSan[]> {
        return this.http.get<NhomTaiSan[]>(this.libraryUrl + '?type=nhomtaisan');
    }

    getLoaiTaiSans(): Observable<LoaiTaiSan[]> {
        return this.http.get<LoaiTaiSan[]>(this.libraryUrl + '?type=loaitaisan');
    }

    getDonViTinhs(): Observable<DonViTinh[]> {
        return this.http.get<DonViTinh[]>(this.libraryUrl + '?type=donvitinh');
    }

    getDonVisVaPhongBans(): Observable<DonVi[]> {
        return this.http.get<DonVi[]>(this.libraryUrl + '?type=donvivaphongban');
    }
}
