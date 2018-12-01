import {Component, isDevMode, OnInit} from '@angular/core';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';

@Component({
    selector: 'app-hien-thi-ke-hoach',
    templateUrl: './hien-thi-ke-hoach.component.html',
    styleUrls: ['./hien-thi-ke-hoach.component.scss']
})
export class HienThiKeHoachComponent implements OnInit {
    keHoachs: KeHoach[];
    total: number;
    page: number;
    size: number;
    totalPage: number;

    constructor(private keHoachService: KeHoachService) {
        this.keHoachs = [];
        this.total = 0;
        this.page = 0;
        this.size = 10;
        this.totalPage = 0;
    }

    ngOnInit() {
        this.getKeHoachs();

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
