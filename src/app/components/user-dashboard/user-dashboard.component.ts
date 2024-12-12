import { Component } from '@angular/core';
import { RestaurantsComponent } from '../restaurants/restaurants.component';  // Import RestaurantsComponent

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  imports: [RestaurantsComponent],  // Import it here
})
export class UserDashboardComponent {
  // Component logic here
}
