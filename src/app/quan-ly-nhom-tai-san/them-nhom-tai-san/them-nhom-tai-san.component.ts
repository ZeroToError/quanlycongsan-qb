import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-nhom-tai-san',
  templateUrl: './them-nhom-tai-san.component.html',
  styleUrls: ['./them-nhom-tai-san.component.scss']
})
export class ThemNhomTaiSanComponent implements OnInit {

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
