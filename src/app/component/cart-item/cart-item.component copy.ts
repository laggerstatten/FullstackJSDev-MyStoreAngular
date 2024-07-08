import { Component, Input, Output, EventEmitter } from '@angular/core';
import CartItems from 'src/app/model/Cart-Items';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() item!: CartItems;
  @Output() remove = new EventEmitter<CartItems>();

  updateQuantity(item: CartItems): void {
    console.log(`Quantity for ${item.product.name} updated to ${item.quantity}`);
    // Implement quantity update logic here
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
