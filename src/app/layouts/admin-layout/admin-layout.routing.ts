import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {ThongKeComponent} from '../../thong-ke/thong-ke.component';
import {HienThiTaiSanComponent} from '../../quan-ly-tai-san/hien-thi-tai-san/hien-thi-tai-san.component';
import {HienThiNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/hien-thi-nhom-tai-san/hien-thi-nhom-tai-san.component';
import {HienThiKeHoachComponent} from '../../quan-ly-ke-hoach/hien-thi-ke-hoach/hien-thi-ke-hoach.component';
import {HienThiDeXuatComponent} from '../../quan-ly-de-xuat/hien-thi-de-xuat/hien-thi-de-xuat.component';
import {ThemTaiSanComponent} from '../../quan-ly-tai-san/them-tai-san/them-tai-san.component';
import {SuaTaiSanComponent} from '../../quan-ly-tai-san/sua-tai-san/sua-tai-san.component';
import {ThemNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/them-nhom-tai-san/them-nhom-tai-san.component';
import {SuaNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/sua-nhom-tai-san/sua-nhom-tai-san.component';
import {ThemKeHoachComponent} from '../../quan-ly-ke-hoach/them-ke-hoach/them-ke-hoach.component';
import {ThemDeXuatComponent} from '../../quan-ly-de-xuat/them-de-xuat/them-de-xuat.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'table-list',           component: TableListComponent },
    { path: 'typography',           component: TypographyComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'maps',                 component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'hien-thi-tai-san',      component: HienThiTaiSanComponent },
    { path: 'them-tai-san',      component: ThemTaiSanComponent },
    { path: 'sua-tai-san',      component: SuaTaiSanComponent },
    { path: 'hien-thi-nhom-tai-san',      component: HienThiNhomTaiSanComponent },
    { path: 'them-nhom-tai-san',      component: ThemNhomTaiSanComponent },
    { path: 'sua-nhom-tai-san',      component: SuaNhomTaiSanComponent },
    { path: 'hien-thi-ke-hoach',      component: HienThiKeHoachComponent },
    { path: 'them-ke-hoach',      component: ThemKeHoachComponent },
    { path: 'hien-thi-de-xuat', component: HienThiDeXuatComponent },
    { path: 'them-de-xuat',     component: ThemDeXuatComponent },
    { path: 'thong-ke',             component: ThongKeComponent },
];
