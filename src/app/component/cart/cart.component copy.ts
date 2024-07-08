import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cart from 'src/app/model/Cart';
import CartItems from 'src/app/model/Cart-Items';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart!: Cart;
  itemsInCart: CartItems[] = [];

  constructor(private router: Router, private cartService: CartService) { }

  updateItemsInCart(): void {
    if (this.cart && this.cart.items) {
      this.itemsInCart = Object
        .keys(this.cart.items)
        .map(key => this.cart.items[parseInt(key)]);
    }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.updateItemsInCart();
  }

  /**
    getTotal(): number {
      return this.itemsInCart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  
    removeFromCart(itemToRemove: CartItems): void {
      this.cartService.removeItem(itemToRemove.product.id);
      this.updateItemsInCart();
    }
  
    checkout(): void {
      console.log('Proceeding to checkout...');
      // Implement checkout logic here
    }
  */
}
