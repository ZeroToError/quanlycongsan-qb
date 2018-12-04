import {Component, isDevMode, OnInit} from '@angular/core';
import {TaiSan} from '../../_models/tai-san';
import {TaiSanService} from '../../_services/tai-san.service';
import {DonViTinh} from '../../_models/don-vi-tinh';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {PhongBan} from '../../_models/phong-ban';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {LibraryService} from '../../_services/library.service';
import {DonVi} from '../../_models/don-vi';
import {SharingService} from '../../_services/sharing.service';

@Component({
  selector: 'app-hien-thi-tai-san',
  templateUrl: './hien-thi-tai-san.component.html',
  styleUrls: ['./hien-thi-tai-san.component.scss']
})
export class HienThiTaiSanComponent implements OnInit {

  taiSans: TaiSan[];
    total: number;
    page: number;
    size: number ;
    totalPage: number;
    loaiTaiSans: LoaiTaiSan[] = [];
    nhomTaiSans: NhomTaiSan[] = [];
    donVis: DonVi[] = [];


    searchFilter = {
        tenTaiSan: '',
        loaiTaiSan: '',
        nhomTaiSan: '',
        donVi: ''
    };
  constructor(private taiSanService: TaiSanService,
              private libraryService: LibraryService,
              private sharingService: SharingService) {
    this.taiSans = [];
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
  }

  async ngOnInit() {
    this.getTaiSans();
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

    getLoaiTaiSans() {
        this.libraryService.getLoaiTaiSans().subscribe(
            result => {
                this.loaiTaiSans = result['result'];
            }, error2 => {
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


    setItemPerPage(itemPerPage: number) {
      this.size = itemPerPage;
      this.page = 0;
      this.getTaiSans();
    }

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
