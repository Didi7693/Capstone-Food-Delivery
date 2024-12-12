import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

interface CartItem {
  total: number; // Define the structure of a cart item
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [CommonModule],  // Add CommonModule here
})
export class CartComponent {
  cartItems: CartItem[] = []; // Specify the type of cartItems

  calculateTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.total, 0);
  }
}
