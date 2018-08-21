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
  brands: Object[];
  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    return this.http.get(`/api/common/brands/`);
  }
  getBrandResults(brandId, limit?, offset? ): Observable<any> {
    return this.http.get(`/api/web/pages/?brand=${brandId}&limit=${limit}&offset=${offset}/`);
  }
}
