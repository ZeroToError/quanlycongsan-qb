import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: number;
}

declare interface ParentMenu {
    class: string;
    title: string;
    icon: string;
    toggle: boolean;
    itemsMenu: RouteInfo[];
    type: number;
}


export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'design_app', class: '', type: 0},

    {path: '/hien-thi-tai-san', title: 'Hiển thị tài sản', icon: 'business_bank', class: '', type: 1},
    {path: '/them-tai-san', title: 'Thêm tài sản', icon: 'business_briefcase-24', class: '', type: 1},
    {path: '/sua-tai-san', title: 'Sửa tài sản', icon: 'files_paper', class: '', type: 1},

    {path: '/hien-thi-nhom-tai-san', title: 'Hiển thị nhóm tài sản', icon: 'business_bank', class: '', type: 2},
    {path: '/them-nhom-tai-san', title: 'Thêm nhóm tài sản', icon: 'business_briefcase-24', class: '', type: 2},
    {path: '/sua-nhom-tai-san', title: 'Sửa nhóm tài sản', icon: 'business_briefcase-24', class: '', type: 2},

    {path: '/hien-thi-ke-hoach', title: 'Hiển thị kế hoạch', icon: 'business_bank', class: '', type: 3},
    {path: '/them-ke-hoach', title  : 'Thêm kế hoạch', icon: 'business_briefcase-24', class: '', type: 3},

    {path: '/hien-thi-de-xuat', title: 'Hiển thị đề xuất', icon: 'business_bank', class: '', type: 4},
    {path: '/them-de-xuat', title: 'Thêm đề xuất', icon: 'business_briefcase-24', class: '', type: 4},

    {path: '/thong-ke', title: 'Thống kê', icon: 'business_money-coins', class: '', type: 5},


    {path: '/icons', title: 'Icons', icon: 'education_atom', class: '', type: 6},
    {path: '/maps', title: 'Maps', icon: 'location_map-big', class: '', type: 6},
    {path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '', type: 6},
    {path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '', type: 6},
    {path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '', type: 6},
    {path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '', type: 6}
];
export const MENUS: ParentMenu[] = [
    {
        toggle: false,
        title: 'Quản lý tài sản',
        icon: 'business_bank',
        class: 'parent',
        type: 1,
        itemsMenu: ROUTES.filter(value => value.type === 1)
    },
    {
        toggle: false,
        title: 'Quản lý nhóm tài sản',
        icon: 'business_bank',
        class: 'parent',
        type: 2,
        itemsMenu: ROUTES.filter(value => value.type === 2)
    },
    {
        toggle: false,
        title: 'Quản lý kế hoạch',
        icon: 'business_bank',
        class: 'parent',
        type: 3,
        itemsMenu: ROUTES.filter(value => value.type === 3)
    },
    {
        toggle: false,
        title: 'Quản lý thống kê',
        icon: 'business_bank',
        class: 'parent',
        type: 4,
        itemsMenu: ROUTES.filter(value => value.type === 4)
    },

]

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
    itemsParentMenu: ParentMenu[];
    userName: string;

  constructor() {
      this.userName = '';
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.itemsParentMenu = MENUS.filter(value => value);
    this.userName = localStorage.getItem('username');
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
