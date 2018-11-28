import { Component, OnInit } from '@angular/core';
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
        this.taiSanService.getAll(this.page, this.size).subscribe(
            result => {
                this.taiSans = result['result'];
                this.total = result['total'];
                this.totalPage =  Math.ceil(this.total / this.size) ;
            }, error2 => {
                alert('Lỗi');
            }
        )
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
