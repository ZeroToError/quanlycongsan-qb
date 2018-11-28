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

  constructor(private taiSanService: TaiSanService) {
    this.taiSans = [];
  }

  ngOnInit() {
    this.taiSanService.getAll().subscribe(
        result => {
          this.taiSans = result;
        }, error2 => {
          alert('Lỗi');
        }
    )
  }
}
