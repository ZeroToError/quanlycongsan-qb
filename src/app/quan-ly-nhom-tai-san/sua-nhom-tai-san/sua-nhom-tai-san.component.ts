import { Component, OnInit } from '@angular/core';

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
