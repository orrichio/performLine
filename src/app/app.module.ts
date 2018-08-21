import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/interceptors/token.interceptor';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
