import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },


    { path: '/hien-thi-tai-san', title: 'Hiển thị tài sản',  icon: 'business_bank', class: '' },
    { path: '/them-tai-san', title: 'Thêm tài sản',  icon: 'business_briefcase-24', class: '' },
    { path: '/sua-tai-san', title: 'Sửa tài sản',  icon: 'files_paper', class: '' },

    { path: '/hien-thi-nhom-tai-san', title: 'Hiển thị nhóm tài sản',  icon: 'business_bank', class: '' },
    { path: '/them-nhom-tai-san', title: 'Thêm nhóm tài sản',  icon: 'business_briefcase-24', class: '' },
    { path: '/sua-nhom-tai-san', title: 'Sửa nhóm tài sản',  icon: 'business_briefcase-24', class: '' },

    { path: '/hien-thi-ke-hoach', title: 'Hiển thị kế hoạch',  icon: 'business_bank', class: '' },
    { path: '/them-ke-hoach', title: 'Thêm kế hoạch',  icon: 'business_briefcase-24', class: '' },

    { path: '/hien-thi-de-xuat', title: 'Hiển thị đề xuất',  icon: 'business_bank', class: '' },
    { path: '/them-de-xuat', title: 'Thêm đề xuất',  icon: 'business_briefcase-24', class: '' },

    { path: '/thong-ke', title: 'Thống kê',  icon: 'business_money-coins', class: '' },




    { path: '/icons', title: 'Icons',  icon: 'education_atom', class: '' },
    { path: '/maps', title: 'Maps',  icon: 'location_map-big', class: '' },
    { path: '/notifications', title: 'Notifications',  icon: 'ui-1_bell-53', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon: 'users_single-02', class: '' },
    { path: '/table-list', title: 'Table List',  icon: 'design_bullet-list-67', class: '' },
    { path: '/typography', title: 'Typography',  icon: 'text_caps-small', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
    userName: string;

  constructor() {
      this.userName = '';
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.userName = localStorage.getItem('username');
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
