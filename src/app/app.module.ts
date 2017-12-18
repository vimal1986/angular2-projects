import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/index';



import {routingComponents, AppRoutingModule} from './app.routing.module';
import {HomeRouteModule} from "./home/index";
import {HttpModule} from "@angular/http";
import { PackageDetailsComponent } from './package-details/package-details.component';
import {PackageService} from './services/packageservice';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginComponent } from './my-account/login/login.component';
import { RegisterComponent } from './my-account/register/register.component';
import { ForgetPasswordComponent } from './my-account/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserServices} from "./services/user-services";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PackageDetailsComponent,
    MyAccountComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeRouteModule,
    HttpModule,
    FormsModule , ReactiveFormsModule
    
],
  providers: [PackageService,UserServices],
  bootstrap: [AppComponent]
})

export class AppModule { }