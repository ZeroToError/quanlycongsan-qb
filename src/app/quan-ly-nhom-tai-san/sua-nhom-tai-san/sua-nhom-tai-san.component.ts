import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-sua-nhom-tai-san',
  templateUrl: './sua-nhom-tai-san.component.html',
  styleUrls: ['./sua-nhom-tai-san.component.scss']
})
export class SuaNhomTaiSanComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

    isValidated(): boolean {
        return this.isNotEmptyString('a') && this.isNotEmptyString('a');
    }

    private isNotEmptyString(text: String) {
        return text !== undefined && text !== null && text !== '';
    }
}
