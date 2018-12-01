import {TaiSanCuThe} from './tai-san-cu-the';

export class TaiSanV2 {
    Id: number;
    IdLoaiTaiSan: number;
    IdNhomTaiSan: number;
    IdDonViTinh: number;
    IdPhongBan: number;
    MaTaiSan: string;
    MaThietBi: string;
    TenTaiSan: string;
    NamSuDung: Date;
    ThongSoKyThuat: string;
    TaiSanCuThe: TaiSanCuThe[]
}
