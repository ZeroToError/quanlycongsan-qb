import {Injectable} from '@angular/core';
import {KeHoach} from '../_models/ke-hoach';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../_constants/constants';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
    providedIn: 'root'
})
export class KeHoachService {
    private taiSanUrl = API_URL + '/kehoachs';
    keHoachs: KeHoach[];

    constructor(private http: HttpClient) {
        this.keHoachs = [];
    }

    getAll(page: number, size: number): Observable<any> {

        const start = +page * +size;
        let end = +start + +size;
        if (end > +this.keHoachs.length - 1) {
            end = +this.keHoachs.length - 1;
        }
        const result = this.keHoachs.slice(start, end);
        return of(
            {
                result: result,
                totals: this.keHoachs.length
            }
        );
    }

    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.taiSanUrl}/?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }

    getAllFilter(page: number, size: number, filter: any): Observable<any> {
        filter = Array(filter);
        const url = `${this.taiSanUrl}/?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }


}
