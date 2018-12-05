<<<<<<< HEAD
import {Component, isDevMode, OnInit} from '@angular/core';
import {TaiSanService} from '../../_services/tai-san.service';
import {LibraryService} from '../../_services/library.service';
import {DonVi} from '../../_models/don-vi';
import {TaiSan} from '../../_models/tai-san';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {PhongBan} from '../../_models/phong-ban';
=======
import { Component, OnInit } from '@angular/core';
import {DonVi} from '../../_models/don-vi';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {TaiSanService} from '../../_services/tai-san.service';
import {LibraryService} from '../../_services/library.service';
import {SharingService} from '../../_services/sharing.service';
import {TaiSan} from '../../_models/tai-san';
>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd

@Component({
  selector: 'app-thong-ke-tai-san',
  templateUrl: './thong-ke-tai-san.component.html',
  styleUrls: ['./thong-ke-tai-san.component.scss']
})
export class ThongKeTaiSanComponent implements OnInit {
    taiSans: TaiSan[];
    total: number;
    page: number;
    size: number ;
    totalPage: number;
    loaiTaiSans: LoaiTaiSan[] = [];
<<<<<<< HEAD
    phongBans: PhongBan[] = [];
    selectedPhongBan: PhongBan;
=======
    nhomTaiSans: NhomTaiSan[] = [];
    donVis: DonVi[] = [];
>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd


    searchFilter = {
        tenTaiSan: '',
        loaiTaiSan: '',
<<<<<<< HEAD
        phongBan: ''
    };
    constructor(private taiSanService: TaiSanService,
                private libraryService: LibraryService) {
=======
        nhomTaiSan: '',
        donVi: ''
    };
    constructor(private taiSanService: TaiSanService,
                private libraryService: LibraryService,
                private sharingService: SharingService) {
>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd
        this.taiSans = [];
        this.total = 0;
        this.page = 0;
        this.size = 10;
        this.totalPage = 0;
    }

    async ngOnInit() {
        this.getTaiSans();
<<<<<<< HEAD

        if (isDevMode()) {
            this.initOnLocal();
        } else {
            this.initOnServerDemo();
        }
    }

    initOnLocal() {
        this.getLoaiTaiSans();
        this.getPhongBans();
    }

    initOnServerDemo() {
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
        this.phongBans = [
            {
                id: 1,
                ten: 'Văn phòng khoa',
                ma: 'ABC',
                child: []
            },
            {
                id: 2,
                ten: 'Phòng nước',
                ma: 'ABC',
                child: []
            }
        ];
    }
=======
        this.initOnLocal();
    }

    initOnLocal() {
        this.getNhomTaiSans();
        this.getLoaiTaiSans();
        this.getDonViTinhs();
        this.getDonVis();
    }


    getNhomTaiSans() {
        this.libraryService.getNhomTaiSans().subscribe(
            result => {
                this.nhomTaiSans = result['result'];
            }, error2 => {
                this.sharingService.notifError('Khong the fetch nhom tai san ' + error2['errorMessage']);
            }
        );
    }

>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd
    getLoaiTaiSans() {
        this.libraryService.getLoaiTaiSans().subscribe(
            result => {
                this.loaiTaiSans = result['result'];
            }, error2 => {
<<<<<<< HEAD
                alert('Khong the fetch loai tai san');
            }
        );
    }
    getPhongBans() {
        this.libraryService.getPhongBans().subscribe(
            result => {
                this.phongBans = result['result'];
            }, error2 => {
                alert('Khong the fetch don vi tinh');
            }
        );
    }
=======
                this.sharingService.notifError('Khong the fetch loai tai san');
            }
        );
    }

    getDonViTinhs() {
        this.libraryService.getDonViTinhs().subscribe(
            result => {
                // this.donViTinh = result['result'];
            }, error2 => {
                this.sharingService.notifError('Khong the fetch don vi tinh');
            }
        );
    }

    getDonVis() {
        this.libraryService.getDonVis().subscribe(
            result => {
                this.donVis = result['result'];
            }, error2 => {
                this.sharingService.notifError('Khong the fetch don vi tinh');
            }
        );
    }


>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd
    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
        this.getTaiSans();
    }
<<<<<<< HEAD
    getTaiSans() {
        if (isDevMode()) {
            this.taiSanService.getAllFromApi(this.page, this.size).subscribe(
                result => {

                    if (result['errorCode'] === 0) {
                        this.taiSans = result['result']['items'];
                        this.total = result['result']['totals'];
                        this.totalPage =  Math.ceil(this.total / this.size) ;
                    } else {
                        alert('lỗi 2');
                    }
                }, error2 => {
                    console.log('Lỗi', error2);
                }
            );
        } else {
            this.taiSanService.getAll(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === undefined) {
                        this.taiSans = result['result'];
                        this.total = result['totals'];
                        this.totalPage =  Math.ceil(this.total / this.size) ;
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        }
    }
=======

    getTaiSans() {
        this.taiSanService.getAllFromApi(this.page, this.size).subscribe(
            result => {

                if (+result['errorCode'] === 0) {
                    this.taiSans = result['result']['items'];
                    this.total = result['result']['totals'];
                    this.totalPage =  Math.ceil(this.total / this.size) ;
                } else {
                    this.sharingService.notifError('Không thể load tài sản ' + result['errorMessage']);
                }
            }, error2 => {
                this.sharingService.notifError('Không thể load tài sản');
            }
        );
    }


>>>>>>> d06c2875b07a36d650c17d4fbc2799c47d01a5bd
    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.page = page - 1;
        this.getTaiSans();
    }

    previousPage() {
        this.page--;
        this.getTaiSans();
    }
    nextPage() {
        this.page++;
        this.getTaiSans();
    }
}

