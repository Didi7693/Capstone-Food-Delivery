import { Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

export const routes: Routes = [
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' }, // Default route
];

