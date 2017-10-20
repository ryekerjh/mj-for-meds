//Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//Services
import { LoaderService } from './services/loader.service';
//3rd Party Imports
import {provideAuth, AuthHttp, JwtHelper} from 'angular2-jwt';
//Modules
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
