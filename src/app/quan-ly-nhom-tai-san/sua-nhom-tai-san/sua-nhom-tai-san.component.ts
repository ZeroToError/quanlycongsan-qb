import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {SharingService} from '../../_services/sharing.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sua-nhom-tai-san',
  templateUrl: './sua-nhom-tai-san.component.html',
  styleUrls: ['./sua-nhom-tai-san.component.scss']
})
export class SuaNhomTaiSanComponent implements OnInit {

    nhomTaiSan = {
        id: 1,
        ten: 'Cái này đã tồn tại',
        ma: 'Cái này cũng thế',
    };
    saveClicked = false;
    constructor(private nhomTaiSanService: NhomTaiSanService,
                private router: Router,
                private sharingService: SharingService) {
    }

    ngOnInit() {
    }

    suaNhomTaiSan(): void {
        this.saveClicked = true;
        if (this.validate()) {
            this.sharingService.notifInfo('Sửa nhóm tài sản thành công');
            this.router.navigate(['/nhom-tai-san']);
            // this.nhomTaiSanService.editNhomTaiSan(this.nhomTaiSan).subscribe(
            //     result => {
            //         if ( result['errorCode'] === 0) {
            //             this.sharingService.notifInfo('Sửa nhóm tài sản thành công');
            //             this.router.navigate(['/nhom-tai-san']);
            //         } else {
            //             this.sharingService.notifError('Sửa nhóm tài sản thất bại ' + result['errorMessage']);
            //         }
            //     },
            //     error2 => {
            //         this.sharingService.notifError('Sửa nhóm tài sản thất bại ' + error2['errorMessage']);
            //     }
            // );
        } else {
            this.sharingService.notifError('Vui lòng kiểm tra lại dữ liệu');
        }

    }
    validate(): boolean {
        return this.nhomTaiSan.ten !== ''
            && this.nhomTaiSan.ma !== ''
    }
}
