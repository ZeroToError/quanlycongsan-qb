import { Injectable } from '@angular/core';
import {TaiSan} from '../_models/tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import {forEach} from '@angular/router/src/utils/collection';
import index from '@angular/cli/lib/cli';

@Injectable({
  providedIn: 'root'
})
export class TaiSanService {

    taiSans: TaiSan[];


    constructor() {
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

    getAll(page: number, size: number): Observable<any> {

        let index = 1;
        for (let taiSan of this.taiSans) {
            taiSan.maTaiSan = 'TS-0' + index;
            index++;
        }

        const  start = +page * +size;
        let end = +start + +size;
        if (end > +this.taiSans.length - 1) {
            end = +this.taiSans.length - 1;
        }
        const result = this.taiSans.slice(start, end);
        return of(
            {
                result: result,
                total: this.taiSans.length
            }

        );
    }
}
