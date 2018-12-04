import { Component, OnInit } from '@angular/core';
import {DeXuatV2} from '../../_models/de-xuat-v2';
import {LoaiDeXuat} from '../../_models/loai-de-xuat';
import {DonVi} from '../../_models/don-vi';
import {SharingService} from '../../_services/sharing.service';
import {LibraryService} from '../../_services/library.service';
import {DeXuatService} from '../../_services/de-xuat.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-them-de-xuat',
  templateUrl: './them-de-xuat.component.html',
  styleUrls: ['./them-de-xuat.component.scss']
})
export class ThemDeXuatComponent implements OnInit {

  newDeXuat: DeXuatV2;
  loaiDeXuats: LoaiDeXuat[] = [];
  donVis: DonVi[] = [];
  saveClicked = false;
  constructor(private sharingService: SharingService,
              private libraryService: LibraryService,
              private deXuatService: DeXuatService,
              private router: Router) {
    this.newDeXuat = {
      idLoaiYeuCau: 0,
      idDonVi: 0,
      tenYeuCau: '',
      lyDo: '',
      noiDung: '',
      nam: new Date().getFullYear(),
      namHoc: ''
    };
  }

  ngOnInit() {
    this.getDonvis();
    this.getLoaiYeuCau();
  }

    getLoaiYeuCau() {
        this.libraryService.getLoaiDeXuats().subscribe(
            result => {
                this.loaiDeXuats = result['result'];
            }, error2 => {
                this.sharingService.notifError('Không thể load loại đề xuất ' + error2['errorMessage']);
            }
        );
    }

    getDonvis() {
        this.libraryService.getDonVis().subscribe(
            result => {
                this.donVis = result['result'];
            }, error2 => {
                this.sharingService.notifError('Không thể load loại đơn vị ' + error2['errorMessage']);
            }
        );
    }

    luuDX() {
      this.saveClicked = true;
      if (this.validate()) {
          this.deXuatService.add(this.newDeXuat).subscribe(
              result => {
                  if (+result['errorCode'] === 0) {
                      this.sharingService.notifInfo('Thêm đề xuất thành công');
                      this.router.navigate(['/de-xuat']);
                  } else {
                      this.sharingService.notifError('Không thể thêm đề xuất ' + result['errorMessage']);
                  }
              }, error2 => {
                  this.sharingService.notifError('Không thể thêm đề xuất ' + error2['errorMessage']);
              }
          )
      } else {
          this.sharingService.notifError('Vui lòng xem lại dữ liệu');
      }
    }

    validate(): boolean {
        return this.newDeXuat.tenYeuCau !== ''
            && +this.newDeXuat.idLoaiYeuCau !== 0
            && +this.newDeXuat.idDonVi !== 0
            && +this.newDeXuat.nam !== 0
            && this.newDeXuat.namHoc !== ''
            && this.newDeXuat.noiDung !== ''
            && this.newDeXuat.lyDo !== ''
    }
}
