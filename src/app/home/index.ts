import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {SliderComponent} from "./slider/slider.component";
import {SearchComponent} from "./search/search.component";
import { HomeModule } from '../home/HomeModule.component';
import {HomeSingleBannerComponent} from "./home-single-banner/home-single-banner.component";
import {PackagesComponent} from "./packages/packages.component";
import {OnboardMembersComponent} from "./onboard-members/onboard-members.component";
import {PrivatePartyComponent} from "./private-party/private-party.component";
import {ExclusiveTonightComponent} from "./exclusive-tonight/exclusive-tonight.component";

import {Http} from "@angular/http";


export const routes: Routes = [
    { path: '', component: HomeModule }

];

@NgModule({
    declarations: [
        // components
        SliderComponent,
        SearchComponent,
        HomeSingleBannerComponent,
        PackagesComponent,
        OnboardMembersComponent,
        PrivatePartyComponent,
        ExclusiveTonightComponent
    ],
    exports: [
        SliderComponent,
        SearchComponent,
        HomeSingleBannerComponent,
        PackagesComponent,
        OnboardMembersComponent,
        PrivatePartyComponent,
        ExclusiveTonightComponent
    ],
    imports: [
        RouterModule.forChild(routes),
    ],
    providers:[Http]
})
export class HomeRouteModule{}