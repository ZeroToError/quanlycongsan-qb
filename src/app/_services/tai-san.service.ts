import { Injectable } from '@angular/core';
import {TaiSan} from '../_models/tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class TaiSanService {

    taiSans: TaiSan[];


    constructor() {
        this.taiSans = [];
        this.taiSans = [
            {
                id: 1,
                loaiTaiSan: 'Tài sản Cố định',
                nhomTaiSan: 'CPU',
                donViTinh: 'Chiếc',
                maTaiSan: 'TS-001929',
                maThietBi: 'TB-001927',
                namSuDung: new Date(),
                tenTaiSan: 'CPU Apple',
                thongSoKyThuat: '2.7 GHz'
            },
            {
                id: 1,
                loaiTaiSan: 'Tài sản Cố định',
                nhomTaiSan: 'CPU',
                donViTinh: 'Chiếc',
                maTaiSan: 'TS-001929',
                maThietBi: 'TB-001927',
                namSuDung: new Date(),
                tenTaiSan: 'CPU Apple',
                thongSoKyThuat: '2.7 GHz'
            },
            {
                id: 1,
                loaiTaiSan: 'Tài sản Cố định',
                nhomTaiSan: 'CPU',
                donViTinh: 'Chiếc',
                maTaiSan: 'TS-001929',
                maThietBi: 'TB-001927',
                namSuDung: new Date(),
                tenTaiSan: 'CPU Apple',
                thongSoKyThuat: '2.7 GHz'
            },
            {
                id: 1,
                loaiTaiSan: 'Tài sản Cố định',
                nhomTaiSan: 'CPU',
                donViTinh: 'Chiếc',
                maTaiSan: 'TS-001929',
                maThietBi: 'TB-001927',
                namSuDung: new Date(),
                tenTaiSan: 'CPU Apple',
                thongSoKyThuat: '2.7 GHz'
            },
            {
                id: 1,
                loaiTaiSan: 'Tài sản Cố định',
                nhomTaiSan: 'CPU',
                donViTinh: 'Chiếc',
                maTaiSan: 'TS-001929',
                maThietBi: 'TB-001927',
                namSuDung: new Date(),
                tenTaiSan: 'CPU Apple',
                thongSoKyThuat: '2.7 GHz'
            }
        ];
    }

    getAll(): Observable<TaiSan[]> {
        return of(this.taiSans);
    }
}
