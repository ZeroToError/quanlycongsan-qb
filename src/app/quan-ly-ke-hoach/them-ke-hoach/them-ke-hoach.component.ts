import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-them-ke-hoach',
    templateUrl: './them-ke-hoach.component.html',
    styleUrls: ['./them-ke-hoach.component.scss']
})
export class ThemKeHoachComponent implements OnInit {

    constructor(private toastr: ToastrService) {
    }

    ngOnInit() {
    }

    isValidated(): boolean {
        return this.isNotEmptyString('a') && this.isNotEmptyString('a');
    }

    private isNotEmptyString(text: String) {
        return text !== undefined && text !== null && text !== '';
    }

    notifUserNameVaMatKhau() {
        this.toastr.clear();
        if (!this.isValidated()) {
            this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span>Username và Password không được bỏ trống!.`, '', {
                timeOut: 4000,
                closeButton: true,
                enableHtml: true,
                toastClass: 'alert alert-info alert-with-icon',
                positionClass: 'toast-top-center'
            });
        }
    }
}
