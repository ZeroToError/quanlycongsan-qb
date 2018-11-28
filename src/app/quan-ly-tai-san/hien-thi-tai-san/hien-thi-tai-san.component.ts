import { Component, OnInit } from '@angular/core';
import {TaiSan} from '../../_models/tai-san';
import {TaiSanService} from '../../_services/tai-san.service';
import {PageService} from '../../_services/page.service';

@Component({
  selector: 'app-hien-thi-tai-san',
  templateUrl: './hien-thi-tai-san.component.html',
  styleUrls: ['./hien-thi-tai-san.component.scss']
})
export class HienThiTaiSanComponent implements OnInit {

  taiSans: TaiSan[];
    pager: any = {};

    // paged items
    pagedItems: any[];
    itemPerPage: any = 5;

  constructor(private taiSanService: TaiSanService,
              private pageService: PageService) {
    this.taiSans = [];
  }

  ngOnInit() {
    this.taiSanService.getAll().subscribe(
        result => {
          this.taiSans = result;
            this.setPage(1);
        }, error2 => {
          alert('Lỗi');
        }
    )
  }

    setPage(page: number) {
        // get pager object from service
        this.pager = this.pageService.getPager(this.taiSans.length, page);

        // get current page of items
        this.pagedItems = this.taiSans.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    setItemPerPage(itemPP: number) {
      this.itemPerPage = itemPP;
      this.setPage(1);
    }
}
