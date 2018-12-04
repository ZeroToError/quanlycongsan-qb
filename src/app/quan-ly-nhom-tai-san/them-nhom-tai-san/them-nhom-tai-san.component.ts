import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {Router} from '@angular/router';
import {SharingService} from '../../_services/sharing.service';

@Component({
  selector: 'app-them-nhom-tai-san',
  templateUrl: './them-nhom-tai-san.component.html',
  styleUrls: ['./them-nhom-tai-san.component.scss']
})
export class ThemNhomTaiSanComponent implements OnInit {

  nhomTaiSan = {
      ten: '',
      ma: '',
  };
  saveClicked = false;
  constructor(private nhomTaiSanService: NhomTaiSanService,
              private router: Router,
              private sharingService: SharingService) {
    }

  ngOnInit() {
  }

    addNhomTaiSan(): void {
      this.saveClicked = true;
      if (this.validate()) {
          this.nhomTaiSanService.addNhomTaiSan(this.nhomTaiSan).subscribe(
              result => {
                  if ( result['errorCode'] === 0) {
                      this.sharingService.notifInfo('Thêm nhóm tài sản thành công');
                      this.router.navigate(['/nhom-tai-san']);
                  } else {
                      this.sharingService.notifError('Thêm nhóm tài sản thất bại ' + result['errorMessage']);
                  }
              },
              error2 => {
                  this.sharingService.notifError('Thêm nhóm tài sản thất bại ' + error2['errorMessage']);
              }
          );
      } else {
          this.sharingService.notifError('Vui lòng kiểm tra lại dữ liệu');
      }

    }
    validate(): boolean {
        return this.nhomTaiSan.ten !== ''
            && this.nhomTaiSan.ma !== ''
    }
}
