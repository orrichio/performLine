import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  brands$: Observable<any>;
  constructor(private api: ApiService) {
    this.api.getBrands().subscribe(
      brands => {
        this.brands$ = brands.Results;
      }
    )
  }

  ngOnInit() {
  }

}
