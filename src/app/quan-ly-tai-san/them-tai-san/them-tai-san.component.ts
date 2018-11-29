import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-them-tai-san',
  templateUrl: './them-tai-san.component.html',
  styleUrls: ['./them-tai-san.component.scss']
})
export class ThemTaiSanComponent implements OnInit {

  soluong: number;
  constructor() { }

  ngOnInit() {
    this.soluong = 0;
  }

    arrayOne(): any[] {
        return Array(this.soluong);
    }

    remove() {
    if(this.soluong > 0) {
        this.soluong--;
    }
    }
}
