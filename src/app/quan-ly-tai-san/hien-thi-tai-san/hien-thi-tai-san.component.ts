import {Component, isDevMode, OnInit} from '@angular/core';
import {TaiSan} from '../../_models/tai-san';
import {TaiSanService} from '../../_services/tai-san.service';

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
  constructor(private taiSanService: TaiSanService) {
    this.taiSans = [];
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
  }

  ngOnInit() {
    this.getTaiSans();
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
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
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
