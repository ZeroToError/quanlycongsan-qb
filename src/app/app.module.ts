import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import { ThemTaiSanComponent } from './quan-ly-tai-san/them-tai-san/them-tai-san.component';
import { SuaTaiSanComponent } from './quan-ly-tai-san/sua-tai-san/sua-tai-san.component';
import { SuaNhomTaiSanComponent } from './quan-ly-nhom-tai-san/sua-nhom-tai-san/sua-nhom-tai-san.component';
import { ThemNhomTaiSanComponent } from './quan-ly-nhom-tai-san/them-nhom-tai-san/them-nhom-tai-san.component';
import { HienThiTaiSanComponent } from './quan-ly-tai-san/hien-thi-tai-san/hien-thi-tai-san.component';
import { HienThiNhomTaiSanComponent } from './quan-ly-nhom-tai-san/hien-thi-nhom-tai-san/hien-thi-nhom-tai-san.component';
import { HienThiDeXuatComponent } from './quan-ly-de-xuat/hien-thi-de-xuat/hien-thi-de-xuat.component';
import { ThemDeXuatComponent } from './quan-ly-de-xuat/them-de-xuat/them-de-xuat.component';
import { HienThiKeHoachComponent } from './quan-ly-ke-hoach/hien-thi-ke-hoach/hien-thi-ke-hoach.component';
import { ThemKeHoachComponent } from './quan-ly-ke-hoach/them-ke-hoach/them-ke-hoach.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
