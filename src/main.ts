import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { UserDashboardComponent } from './app/components/user-dashboard/user-dashboard.component';
import { RestaurantsComponent } from './app/components/restaurants/restaurants.component';
import { routes } from './app/app.routes';  // Your route configuration

bootstrapApplication(UserDashboardComponent, {
  providers: [
    provideRouter(routes),  // Add your routing here
  ]
}).catch(err => console.error(err));
