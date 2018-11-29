import { Component, OnInit } from '@angular/core';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';

@Component({
  selector: 'app-hien-thi-ke-hoach',
  templateUrl: './hien-thi-ke-hoach.component.html',
  styleUrls: ['./hien-thi-ke-hoach.component.scss']
})
export class HienThiKeHoachComponent implements OnInit {
  keHoachs: KeHoach[];
  constructor(private keHoachService: KeHoachService) {
    this.keHoachs = [];
  }

  ngOnInit() {
      this.keHoachService.getAll().subscribe(
          value => this.keHoachs = value,
          error1 => alert(error1)
      )
  }

}
