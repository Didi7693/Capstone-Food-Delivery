import { Component } from '@angular/core';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent {
  dishes = [
    { name: 'Pasta', price: 12.99 },
    { name: 'Pizza', price: 9.99 },
    { name: 'Salad', price: 7.99 }
  ];

  addToCart(dish: any) {
    // Logic to add the dish to the cart
  }

  formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`; // Formats the price to a string with two decimal places
  }
}
