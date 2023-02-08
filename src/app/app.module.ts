import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { Box1Component } from './box1/box1.component';
import { WordPressComponent } from './button/word-press/word-press.component';
import { DebianComponent } from './button/debian/debian.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    Box1Component,
    WordPressComponent,
    DebianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
