import {Component, isDevMode, OnInit} from '@angular/core';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';
import {LibraryService} from '../../_services/library.service';
import {PhongBan} from '../../_models/phong-ban';
import {LoaiKeHoach} from '../../_models/loai-ke-hoach';

@Component({
    selector: 'app-hien-thi-ke-hoach',
    templateUrl: './hien-thi-ke-hoach.component.html',
    styleUrls: ['./hien-thi-ke-hoach.component.scss']
})
export class HienThiKeHoachComponent implements OnInit {
    keHoachs: KeHoach[];
    phongBans: PhongBan[];
    loaiKeHoach: LoaiKeHoach[];
    total: number;
    page: number;
    size: number;
    totalPage: number;
    tinhTrang: number;

    searchFilter = {
        tenKeHoach: '',
        loaiKeHoach: '',
        phongBan: '',
        nam: '',
        namHoc: ''
    };

    constructor(private keHoachService: KeHoachService, private libraryService: LibraryService) {
        this.keHoachs = [];
        this.phongBans = [];
        this.loaiKeHoach = [];
        this.total = 0;
        this.page = 0;
        this.size = 10;
        this.totalPage = 0;
        this.tinhTrang = 2;
    }

    ngOnInit() {
        this.getLibrary();
        this.getKeHoachs();

    }

    getLibrary() {
        this.libraryService.getLoaiKeHoachs().subscribe(
            value => this.loaiKeHoach = value['result'],
            error => alert('Lỗi')
        );
        this.libraryService.getPhongBans().subscribe(
            value => this.phongBans = value['result'],
            error => alert('Lỗi')
        );
    }

    getKeHoachs() {
        if (isDevMode()) {
            this.keHoachService.getAllFromApi(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === 0) {
                        this.keHoachs = result['result']['items'];
                        this.total = result['result']['totals'];
                        this.totalPage = Math.ceil(this.total / this.size);
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        } else {
            this.keHoachService.getAll(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === undefined) {
                        this.keHoachs = result['result'];
                        this.total = result['totals'];
                        this.totalPage = Math.ceil(this.total / this.size);
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        }
    }

    searchFilterFn() {
        this.keHoachService.getAllFilter(this.page, this.size, this.searchFilter).subscribe(
            result => {
                if (result['errorCode'] === 0) {
                    this.keHoachs = result['result']['items'];
                    this.total = result['result']['totals'];
                    this.totalPage = Math.ceil(this.total / this.size);
                } else {
                    alert('lỗi');
                }
            }, error2 => {
                alert('Lỗi');
            }
        )
    }

    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
        this.getKeHoachs();
    }

    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.page = page - 1;
        this.getKeHoachs();
    }

    previousPage() {
        this.page--;
        this.getKeHoachs();
    }

    nextPage() {
        this.page++;
        this.getKeHoachs();
    }
}
