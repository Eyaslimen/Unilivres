import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AchatsComponent } from './achats/achats.component';
import { SignupComponent } from './signup/signup.component';
import { TelechargerComponent } from './telecharger/telecharger.component';
import { AboutComponent } from './about/about.component';
import { ContacterComponent } from './contacter/contacter.component';
import { ServiceComponent } from './service/service.component';
import { VenteComponent } from './vente/vente.component';
export const routes: Routes = [
{
    path:'',
    component:HomeComponent
},
{
    path:'home',
    component:HomeComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'signup',
    component:SignupComponent
},
{
    path:'achats',
    component:AchatsComponent
},
{
    path:'telecharger',
    component:TelechargerComponent
},
{
    path:'home/about',
    component:AboutComponent
},
{
    path:'home/contacts',
    component:ContacterComponent
},
{
    path:'home/service',
    component:ServiceComponent
},
{
    path:'vente',
    component:VenteComponent
},
];
