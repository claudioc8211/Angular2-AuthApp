import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { Auth } from './services/auth.service';
import {AuthGuard} from './auth.guard';

import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ProfileComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, AUTH_PROVIDERS, Auth, AuthGuard]
})
export class AppModule { }
