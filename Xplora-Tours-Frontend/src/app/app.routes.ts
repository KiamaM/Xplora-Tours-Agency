import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login-form/login-form.component';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { SRPComponent } from './Components/srp/srp.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AddTripFormComponent } from './Components/add-trip-form/add-trip-form.component';
import { ViewToursComponent } from './Components/view-tours/view-tours.component';
import { UpdateTourComponent } from './Components/update-tour/update-tour.component';
import { DeleteTourComponent } from './Components/delete-tour/delete-tour.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';


export const routes: Routes = [
    {path: '', component:LandingPageComponent},
    {path:'login', component:LoginComponent},
    {path: 'register', component:RegisterFormComponent},
    {path: 'search', component:SRPComponent},
    {path: 'profile', component:UserProfileComponent},
    {path: 'dashboard', component:DashboardComponent, children:[
        {path: 'update-tour/:tour_id', component:UpdateTourComponent},  
        {path: 'delete-tour/:tour_id', component:DeleteTourComponent}     
    ]},
    {path:'reset-password', component:ResetPasswordComponent},
    {path:'**', component:NotFoundComponent},
    {path: 'add-trip', component:AddTripFormComponent},
    {path: 'delete-trip', component:ViewToursComponent},

];
