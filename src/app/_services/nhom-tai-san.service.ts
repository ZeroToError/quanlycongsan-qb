import { Injectable } from '@angular/core';
import {NhomTaiSan} from '../_models/nhom-tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NhomTaiSanService {

    private nhomTaiSanUrl = 'http://103.95.197.121:9000/api/nhomtaisans';
    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {
        return this.http.get< any >(this.nhomTaiSanUrl).pipe(
            tap((x: any ) => console.log(`get ok ${x}`)),
            catchError(this.handleError<any>('nhomTaiSan'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
