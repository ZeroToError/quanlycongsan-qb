import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hien-thi-de-xuat',
  templateUrl: './hien-thi-de-xuat.component.html',
  styleUrls: ['./hien-thi-de-xuat.component.scss']
})
export class HienThiDeXuatComponent implements OnInit {

    total: number;
    page: number;
    size: number ;
    totalPage: number;
  constructor() {
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
  }

  ngOnInit() {
  }

    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
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
