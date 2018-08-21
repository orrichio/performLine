import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Http, Headers, Response } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'https://api.performline.com';

  brands: Object[];
  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');

    const headers = new HttpHeaders()
    .set("Access-Control-Allow-Headers", "Content-Type")
    .set('Access-Control-Allow-Methods', 'GET')
    .set('Access-Control-Allow-Origin', '*')
    return this.http.get(`${this.api}/common/brands/`, { headers: headers });
  }
  getBrandResults(brandId, limit?, offset?): Observable<any> {
    return this.http.get(`${this.api}/web/pages/?brand=${brandId}&limit=${limit}&offset=${offset}/`);
  }
}
