import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrandListComponent } from './components/brand-list/brand-list.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { state: 'dashboard' } },
  { path: 'brand/:id/:brandName', component: BrandListComponent, data: { state: 'brand-list' } },
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
