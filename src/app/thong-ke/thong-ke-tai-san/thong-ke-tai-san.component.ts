import { Component, OnInit } from '@angular/core';
import {DonVi} from '../../_models/don-vi';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {TaiSanService} from '../../_services/tai-san.service';
import {LibraryService} from '../../_services/library.service';
import {SharingService} from '../../_services/sharing.service';
import {TaiSan} from '../../_models/tai-san';
import {ExcelService} from '../../_services/excel.service';

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
                private sharingService: SharingService,
                private excelService: ExcelService) {
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
        this.taiSanService.getAllFromApi(this.page, this.size).subscribe(
            result => {

                if (+result['errorCode'] === 0) {
                    this.taiSans = result['result']['items'];
                    this.total = result['result']['totals'];
                    this.totalPage =  Math.ceil(this.total / this.size) ;
                } else {
                    this.sharingService.notifError('Không thể load tài sản');
                }
            }, error2 => {
                this.sharingService.notifError('Không thể load tài sản');
            }
        );
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

    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.taiSans, 'TKTS');
    }
}

