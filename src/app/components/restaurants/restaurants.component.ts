import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants = [
    { id: 1, name: 'Swagath', location: 'Hyderabad' },
    { id: 2, name: 'Pallavi', location: 'Bangalore' },
    { id: 3, name: 'Kinnera', location: 'Chennai' }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewDishes(restaurantId: number): void {
    // Navigate to the dishes component
    console.log(`Viewing dishes for restaurant ID: ${restaurantId}`);
  }
}
