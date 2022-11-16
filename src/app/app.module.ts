import { NgModule } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginButtonComponent } from './login-button/login-button.component';
import { BodyComponent } from './sidebar/body/body.component';
import { CoupensComponent } from './sidenav/coupens/coupens.component';
import { DashboardComponent } from './sidenav/dashboard/dashboard.component';
import { MediaComponent } from './sidenav/media/media.component';
import { PagesComponent } from './sidenav/pages/pages.component';
import { ProductsComponent } from './sidenav/products/products.component';
import { SettingsComponent } from './sidenav/settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { StatisticsComponent } from './sidenav/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    BodyComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
