import {Injectable} from '@angular/core';
import {KeHoach} from '../_models/ke-hoach';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL, httpOptions} from '../_constants/constants';

@Injectable({
    providedIn: 'root'
})
export class KeHoachService {
    private keHoachUrl = API_URL + '/kehoachs';

    constructor(private http: HttpClient) {
    }

    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.keHoachUrl}/?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }

    add(newKeHoach: any): Observable<any> {
        return this.http.post(this.keHoachUrl, newKeHoach, httpOptions);
    }

    duyetKeHoach(keHoach: any): Observable<any> {
        return this.http.put(`${this.keHoachUrl}`, keHoach, httpOptions);
    }
}
