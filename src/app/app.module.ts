lsimport { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginButtonComponent } from './login-button/login-button.component';
=======
import { BodyComponent } from './sidebar/body/body.component';
>>>>>>> 5b06d0c8283c26ec91c2f7b7baa494ca8b057c00

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginButtonComponent
=======
    BodyComponent
>>>>>>> 5b06d0c8283c26ec91c2f7b7baa494ca8b057c00
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
