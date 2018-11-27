import { Injectable } from '@angular/core';
import {NhomTaiSan} from '../_models/nhom-tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class NhomTaiSanService {

    nhomTaiSans: NhomTaiSan[];
  constructor() {
      this.nhomTaiSans = [];
      this.nhomTaiSans = [
          {
              id: 1,
              nameNhomTaiSan: 'MayTinh 1',
              donViTinh: 'Cai',
              namSuDung: new Date()
          },
          {
              id: 2,
              nameNhomTaiSan: 'MayTinh 2',
              donViTinh: 'Cai',
              namSuDung: new Date()
          },
          {
              id: 3,
              nameNhomTaiSan: 'MayTinh 3',
              donViTinh: 'Cai',
              namSuDung: new Date()
          },
          {
              id: 4,
              nameNhomTaiSan: 'MayTinh 4',
              donViTinh: 'Cai',
              namSuDung: new Date()
          },
          {
              id: 5,
              nameNhomTaiSan: 'MayTinh 5',
              donViTinh: 'Cai',
              namSuDung: new Date()
          }
      ];
  }
    getAll(): Observable<NhomTaiSan[]>{
        return of(this.nhomTaiSans);
    }
}
