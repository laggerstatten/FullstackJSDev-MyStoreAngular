import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import CartItems from 'src/app/model/Cart-Items';
import Product from 'src/app/model/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() quantityEmitter: EventEmitter<CartItems> = new EventEmitter();
  @Output() removalEmitter: EventEmitter<CartItems> = new EventEmitter();

  constructor(private cartService: CartService) { }

  handleQuantityChanged(quantity: number): void {
    this.quantityEmitter.emit({
      product: this.product,
      quantity: quantity
    });
  }

  handleProductRemovedFromCart(): void {
    this.removalEmitter.emit({
      product: this.product,
      quantity: 0
    });
  }

}
