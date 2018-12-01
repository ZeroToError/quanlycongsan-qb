import { Component, OnInit } from '@angular/core';
import {TaiSanV2} from '../../_models/tai-san-v2';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {DonViTinh} from '../../_models/don-vi-tinh';
import {PhongBan} from '../../_models/phong-ban';
import {DonVi} from '../../_models/don-vi';

@Component({
  selector: 'app-them-tai-san',
  templateUrl: './them-tai-san.component.html',
  styleUrls: ['./them-tai-san.component.scss']
})
export class ThemTaiSanComponent implements OnInit {

  newTaiSan: TaiSanV2;
  loaiTaiSans: LoaiTaiSan[] = [];
  nhomTaiSans: NhomTaiSan[] = [];
  donViTinhs: DonViTinh[] = [];
  phongBans: PhongBan[] = [];

  constructor() {
    this.newTaiSan = new TaiSanV2();
    this.newTaiSan.TaiSanCuThe = [];
  }

  ngOnInit() {
    this.loaiTaiSans = [
        {
            id: 1,
            ten: 'Tài sản cố định',
            ma: '',
            child: []
        },
        {
            id: 2,
            ten: 'Thiết bị thực hành',
            ma: '',
            child: []
        }
    ];
      this.nhomTaiSans = [
          {
              id: 1,
              ten: 'CPU',
              ma: 'ABC',
              child: []
          },
          {
              id: 2,
              ten: 'Màn hình',
              ma: 'XYZ',
              child: []
          },
          {
              id: 3,
              ten: 'Bàn ghế',
              ma: 'GHI',
              child: []
          }
      ];
      this.phongBans = [
          {
              id: 1,
              ten: 'Kho',
              ma: '',
              child: []
          },
          {
              id: 2,
              ten: 'BQL dự án',
              ma: '',
              child: []
          },
          {
              id: 3,
              ten: 'Phòng tổ chức, hành chính',
              ma: '',
              child: []
          }
      ];
      this.donViTinhs = [
          {
              id: 1,
              ten: 'Chiếc',
              ma: '',
              child: []
          },
          {
              id: 2,
              ten: 'Chai',
              ma: '',
              child: []
          },
          {
              id: 3,
              ten: 'Bộ',
              ma: '',
              child: []
          }
      ];
  }

  addTaiSanCuThe(soluong: number) {
      this.newTaiSan.TaiSanCuThe = [];
    for (let i = 1; i <= soluong; i++) {
      this.newTaiSan.TaiSanCuThe.push(
          {
              Id: 0,
              IdTaiSan: this.newTaiSan.Id,
              MaTaiSan: '',
              MaThietBi: '',
              TenTaiSan: this.newTaiSan.TenTaiSan,
              NamSuDung: this.newTaiSan.NamSuDung,
              ThongSoKyThuat: '',
              TyLeChatLuong: 0,
              TinhTrang: 0,
              GhiChu: ''
          }
      )
    }
  }

  removeTSCT(i: number) {
    this.newTaiSan.TaiSanCuThe.splice(i - 1, 1);
  }

    luuTS() {
      console.log('taisan: ', this.newTaiSan);
    }
}
