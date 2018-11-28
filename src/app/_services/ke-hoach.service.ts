import {Injectable} from '@angular/core';
import {KeHoach} from '../_models/ke-hoach';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class KeHoachService {
    keHoach: KeHoach[];

    constructor() {
        this.keHoach = [];
        this.keHoach = [
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            },
            {
                id: 1,
                file: 'abc/xyz.scv',
                nam: 2018,
                namHoc: '2018-2019',
                tenDonVi: 'Khoa CNTT',
                tenKeHoach: 'Kế hoạch nâng cấp phòng máy',
                tenLoaiKeHoach: 'Kế hoạch mới'
            }
        ];
    }

    getAll(): Observable<KeHoach[]> {
        return of(this.keHoach);
    }
}
