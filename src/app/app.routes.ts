import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'location/:id', component: LocationDetailsComponent },
    { path: 'location/:locationId/category/:categoryId', component: CategoryDetailsComponent },
    { path: '**', redirectTo: '' }
];
