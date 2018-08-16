import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  brands: Object[];
  constructor() {
    this.brands = [
      {
        Id: 11,
        Name: "A. Foo Industries"
      },
      {
        Id: 12,
        Name: "BAR, Inc."
      },
      {
        Id: 13,
        Name: "Baz Media"
      }
    ]
  }

  getBrands(): Observable<any> {
    return of(this.brands);
  }
}
