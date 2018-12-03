import { Component, OnInit } from '@angular/core';
import {DeXuat} from '../../_models/de-xuat';
import {LoaiDeXuat} from '../../_models/loai-de-xuat';
import {LibraryService} from '../../_services/library.service';
import {SharingService} from '../../_services/sharing.service';
import {DeXuatService} from '../../_services/de-xuat.service';

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
    deXuats: DeXuat[] = [];
    loaiDeXuats: LoaiDeXuat[] = [];

    selectedLoaiDeXuat: number;
    searchFilter = {
        nam: 0
    }
  constructor(private libraryService: LibraryService,
              private sharingService: SharingService,
              private deXuatService: DeXuatService) {
      this.total = 0;
      this.page = 0;
      this.size = 5;
      this.totalPage = 0;
      this.selectedLoaiDeXuat = 0;
  }

  ngOnInit() {
      this.getLoaiDeXuats();
      this.getDeXuats();
  }

  getDeXuats() {
      this.deXuatService.getAll(this.selectedLoaiDeXuat, this.page, this.size).subscribe(
          result => {
              this.deXuats = result['result']['items'];
              this.total = result['result']['totals'];
              this.totalPage =  Math.ceil(this.total / this.size) ;
          }, error2 => {
              this.sharingService.notifError('Không thể tải đề xuất: ' + error2['errorMessage']);
          }
      );
  }

    getLoaiDeXuats() {
        this.libraryService.getLoaiDeXuats().subscribe(
            result => {
                this.loaiDeXuats = result['result'];
            }, error2 => {
                this.sharingService.notifError('Không thể tải loại đề xuất: ' + error2['errorMessage']);
            }
        )
    }

    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
        this.getDeXuats();
    }
    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.page = page - 1;
        this.getDeXuats();
    }

    previousPage() {
        this.page--;
        this.getDeXuats();
    }
    nextPage() {
        this.page++;
        this.getDeXuats();
    }

}
