import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: any;
  @Output() remove = new EventEmitter<any>();

  updateQuantity(item: any): void {
    console.log(`Quantity for ${item.product.name} updated to ${item.quantity}`);
    // Implement quantity update logic here
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
