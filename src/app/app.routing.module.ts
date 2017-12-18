import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent} from './flight/flight.component';
import { HolidaysComponent} from './holidays/holidays.component';
import { HotelsComponent} from './hotels/hotels.component';
import { HomeModule} from './home/HomeModule.component';
import {PackageListingComponent} from "./PackagesListing/packagelisting.component";
import {PackageDetailsComponent} from "./package-details/package-details.component";
import {LoginComponent} from "./my-account/login/login.component";
import {RegisterComponent} from "./my-account/register/register.component";
import {ForgetPasswordComponent} from "./my-account/forget-password/forget-password.component";


const mainRoute: Routes = [
    {path:'', component:HomeModule},
    {path:'holidays', component:HolidaysComponent},
    {path:'flights', component:FlightComponent},
    {path:'hotels', component:HotelsComponent},
    {path:'packagelisting', component:PackageListingComponent},
    {path:'packagedetails/:id', component:PackageDetailsComponent},
    {path:'login', component:LoginComponent},
    {path:'Register', component:RegisterComponent},
    {path:'Forget', component:ForgetPasswordComponent}

];
@NgModule({
    imports:[
        RouterModule.forRoot(mainRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [
    FlightComponent,
    HolidaysComponent,
    HotelsComponent,
    HomeModule,
    PackageListingComponent,
    PackageDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent
]