import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  displayedColumns: string[] = ['CampaignId', 'Score', 'LastScoredAt'];
  dataSource = new MatTableDataSource<any>(BRAND_DATA);
  brandName;
  private sub: any;
  constructor(private route: ActivatedRoute) {

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.brandName = params['brandName']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue
  }
}
export interface BrandList {
  BrandId: number,
  CampaignId: number,
  CompanyId: number,
  CreatedAt: string,
  Id: number,
  LastScoredAt: string,
  Score: number,
  TrafficSourceId: number,
  Type: string
}


const BRAND_DATA: BrandList[] = [
  {
    BrandId: 11,
    CampaignId: 1,
    CompanyId: 10,
    CreatedAt: "2015-01-02T15:19:03.036446Z",
    Id: 123456789,
    LastScoredAt: "2018-08-03T17:59:54.972402882-04:00",
    Score: 75,
    TrafficSourceId: 1,
    Type: "email"
  },
  {
    BrandId: 12,
    CampaignId: 2,
    CompanyId: 10,
    CreatedAt: "2015-01-02T15:19:03.036446Z",
    Id: 123456000,
    LastScoredAt: "2018-08-03T16:42:54.972407533-04:00",
    Score: 100,
    TrafficSourceId: 2,
    Type: "web"
  },
  {
    BrandId: 31,
    CampaignId: 3,
    CompanyId: 11,
    CreatedAt: "2015-01-02T15:14:03.036446Z",
    Id: 1234536000,
    LastScoredAt: "2018-08-03T16:52:54.972407533-04:00",
    Score: 1003,
    TrafficSourceId: 23,
    Type: "web2"
  },

];