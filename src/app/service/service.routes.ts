import { Routes } from '@angular/router';
import { AchatsComponent } from '../achats/achats.component';
import { TelechargerComponent } from '../telecharger/telecharger.component';

export const routes: Routes = [
{path:'achats',
component:AchatsComponent},
{path:'telecharger',
component:TelechargerComponent}
];
