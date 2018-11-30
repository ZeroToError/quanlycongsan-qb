import { Injectable } from '@angular/core';
import {TaiSan} from '../_models/tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../_constants/constants';


@Injectable({
  providedIn: 'root'
})
export class TaiSanService {
    private taiSanUrl =  API_URL +  '/taisans';
    taiSans: TaiSan[];


    constructor(private http: HttpClient) {
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
                totals: this.taiSans.length
            }

        );
    }


    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.taiSanUrl}/?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }
}
