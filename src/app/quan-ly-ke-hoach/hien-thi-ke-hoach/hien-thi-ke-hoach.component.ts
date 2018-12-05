import {Component, isDevMode, OnInit} from '@angular/core';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';
import {LibraryService} from '../../_services/library.service';
import {LoaiKeHoach} from '../../_models/loai-ke-hoach';
import {DonVi} from '../../_models/don-vi';
import {SharingService} from '../../_services/sharing.service';

@Component({
    selector: 'app-hien-thi-ke-hoach',
    templateUrl: './hien-thi-ke-hoach.component.html',
    styleUrls: ['./hien-thi-ke-hoach.component.scss']
})
export class HienThiKeHoachComponent implements OnInit {
    keHoachs: KeHoach[] = [];
    donVis: DonVi[] = [];
    loaiKeHoach: LoaiKeHoach[] = [];
    total: number;
    page: number;
    size: number;
    totalPage: number;
    idTinhTrang: number;

    searchFilter = {
        tenKeHoach: '',
        loaiKeHoach: '',
        donVi: '',
        nam: '',
        namHoc: '',
        trangThai: ''
    };

    constructor(private keHoachService: KeHoachService,
                private libraryService: LibraryService,
                private sharingService: SharingService) {
        this.total = 0;
        this.page = 0;
        this.size = 10;
        this.totalPage = 0;
        this.idTinhTrang = 2;
    }

    ngOnInit() {
        this.getLibrary();
        this.getKeHoachs();
    }

    getLibrary() {
        this.libraryService.getLoaiKeHoachs().subscribe(
            value => this.loaiKeHoach = value['result'],
            error => this.sharingService.notifError('Không thể load loại kế hoạch')
        );
        this.libraryService.getDonVis().subscribe(
            value => this.donVis = value['result'],
            error2 => this.sharingService.notifError('Không thể load đơn vị')
        );
    }

    getKeHoachs() {
        this.keHoachService.getAllFromApi(this.page, this.size).subscribe(
            result => {
                if (+result['errorCode'] === 0) {
                    this.keHoachs = result['result']['items'];
                    this.total = result['result']['totals'];
                    this.totalPage = Math.ceil(this.total / this.size);
                } else {
                    this.sharingService.notifError('Không thể load kế hoạch');
                }
            }, error2 => {
                this.sharingService.notifError('Không thể load kế hoạch');
            }
        );
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

    duyetKeHoach(keHoach: KeHoach) {
        const keHoachDuyet = {
            'id': keHoach.id,
            'idTrangThai': 2
        };
        this.keHoachService.duyetKeHoach(keHoachDuyet).subscribe(
            value => {
                if (value['errorCode'] === 0) {
                    keHoach.trangThai = 'Đã duyệt';
                    this.sharingService.notifInfo('Duyệt thành công');
                } else {
                    this.sharingService.notifError('Không thê duyệt ' + value['errorMessage']);
                }
            }, error1 => {
                this.sharingService.notifError('Không thể duyệt kế hoạch');
            }
        );
    }
}
