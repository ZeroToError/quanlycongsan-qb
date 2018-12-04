import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {SharingService} from '../../_services/sharing.service';

@Component({
  selector: 'app-hien-thi-nhom-tai-san',
  templateUrl: './hien-thi-nhom-tai-san.component.html',
  styleUrls: ['./hien-thi-nhom-tai-san.component.scss']
})
export class HienThiNhomTaiSanComponent implements OnInit {
  nhomTaiSan: NhomTaiSan[];

  constructor(private nhomTaiSanService: NhomTaiSanService,
              private sharingService: SharingService) {
    this.nhomTaiSan = [];
  }

  ngOnInit() {
      this.nhomTaiSanService.getAll().subscribe(
          result => {
              this.nhomTaiSan = result.result;
          }, error2 => {
              this.sharingService.notifError('Không thể hiển thị nhóm tài sản ' + error2['errorMessage']);
          }
      )
  }

}
